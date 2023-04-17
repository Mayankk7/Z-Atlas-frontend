import React, { useEffect, useState } from 'react'
import Earth from "./assets/images/earth.svg"
import axios from "axios"
import Swal from "sweetalert2";
import Web3 from 'web3';
import contractABI from './contractABI.json';

const Home = ({setData}) => {
  const [source,setSource] = useState();
  const [destination,setDestination] = useState();
  const [contractInstance, setContractInstance] = useState(null);
  const [accountAddress, setAccountAddress] = useState("");

  useEffect(() => {
    async function init() {
      // Connect to MetaMask wallet
      if (window.ethereum) {
        try {
          await window.ethereum.enable();
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          setAccountAddress(accounts[0]);
          const contractAddress = "CONTRACT_ADDRESS_HERE";
          const contract = new web3.eth.Contract(contractABI, contractAddress, { from: accounts[0] });
          setContractInstance(contract);
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    }
    init();
  }, []);

  const calculateRoute = async() => {
    try {
      const body = {source, destination}
      console.log(body);
      await axios.post('https://weary-purse-eel.cyclic.app/api', body)
        .then(async(re) => {
          console.log(re.data.data);
          await localStorage.setItem('data', JSON.stringify(re.data.data));
        })

      if (localStorage.getItem('data')) {
        const data = JSON.parse(localStorage.getItem('data'));
        if (contractInstance && accountAddress) {
          // Call the smart contract function to update the route
          const tx = await contractInstance.methods.updateRoute(data.distance, data.safestRoute).send();
          await tx.wait();
        }
        setData(data);
        window.location.href = "/result";
      }

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Oops...',
        text: 'Kindly type correct areas name !',
      })
    }
  }

  return (
    <>
      <div className='bg-img w-[90vw] h-[100vh] ml-[8vw] mt-[20vh] bg-no-repeat bg-center absolute'/>
      <div className='m-auto mt-[5vh] ml-[20vw]'>
        <div className='bg-[#F2B880] overflow-hidden m-auto ml-[12vw] mt-[5vh] h-[85vh] w-[32vw] z-100 absolute border-8 border-[#4E4B5C]'>
          <p className='w-[20vw] font-lato text-[#4E4B5C] mt-14 text-center m-auto font-extrabold text-3xl'>Bringing you the safest travelling experience using Tech</p>
        </div>
      </div>

      <div className='bg-vector h-[40vh] absolute w-[30vw] ml-[35vw] bg-no-repeat mt-[35vh]'/>
      <div className='mt-[37vh] w-[25vw] h-[40vh] relative ml-[36vw] rounded-lg'>
        <div className=''>
          <input
            type="text"
            onChange={(e) => { setSource(e.target.value) }}
            className='focus:outline-none border-none p-8 pt-4 pb-4 ml-[3vw] w-[20vw] rounded-md font-bold'
            placeholder='Travel From'>
          </input>
        </div>
          <div className='mt-12'>
            <input
              type ="text"
              onChange={(e) => setDestination(e.target.value)}
              className='focus:outline-none border-none p-8 pt-4 pb-4 ml-[3vw] w-[20vw] rounded-md font-bold'
              placeholder='Travel To'
              required
              />
              </div>
              <button
              className='mt-10 bg-[#4E4B5C] hover:font-bold hover:bg-[#242037] text-extrabold text-lg rounded-md p-8 pt-4 pb-4 w-[20vw] ml-[3vw] text-white'
              onClick={() => calculateRoute()}
              >
              Calculate Safest Route
              </button>
              </div>
              <div className='bg-clock mt-[-40vh] h-[100vh] w-[20vw] bg-no-repeat ml-[90vw] z-10 absolute'></div>
              <div className='bg-[#AECDF7] h-full w-[100vw] overflow-visible'>
                <div id='about'>
                  <img src={Earth} className='m-auto w-[15vw] mt-[60vh]' />
                  <p className='font-black text-4xl text-center ml-10 mt-10'>Meet the Team</p>
                  <div className='flex flex-row justify-evenly ml-[15vw] mb-[30vh] mt-[10vh]'>
                    <div className=' w-[30vw]'>
                      <div className='w-[15vw] h-[20vh] rounded-xl bg-white'></div>
                      <p className='text-xl font-extrabold ml-6 text-[#4E4B5C] mt-10'>Priyankush Kashyap</p>
                    </div>
                    <div className=' w-[30vw]'>
                      <div className='w-[15vw] h-[20vh] rounded-xl bg-white'></div>
                      <p className='text-xl font-extrabold ml-[5vw] text-[#4E4B5C] mt-10'>Mayank</p>
                    </div>
                    <div className=' w-[30vw]'>
                      <div className='w-[15vw] h-[20vh] rounded-xl bg-white'></div>
                      <p className='text-xl font-extrabold ml-[4vw] text-[#4E4B5C] mt-10'>Shalini Singh</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
            );
          };            
          export default Home;




