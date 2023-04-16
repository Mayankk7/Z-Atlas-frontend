import React, {useEffect,useState} from 'react'
import Logo from "../components/assets/images/logo.svg";
import Swal from "sweetalert2";
const Nav = () => {
  const [walletAddress,setWalletAddress] = useState("");
  
  useEffect(()=>{
    getCurrentWalletConnected();
    addWalletListener();
  },[])


  const connectWallet = async() => {
    if(typeof window!="undefined" && typeof window.ethereum != "undefined"){
        try{
          const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        }catch(error){
          console.log("Error");
        }
    }else{
      Swal.fire("Please install MetaMask");
    }
  }

  const getCurrentWalletConnected = async() => {
    if(typeof window!="undefined" && typeof window.ethereum != "undefined"){
        try{
          const accounts = await window.ethereum.request({
            method:"eth_accounts"
          });
          if(accounts.length > 0){

            setWalletAddress(accounts[0]);
          }

        }catch(error){
          console.log("Error");
        }
    }else{
      Swal.fire("Please install MetaMask");
    }
  }
  

  const addWalletListener = async () => {
    if(typeof window !="undefined" && typeof window.ethereum!="undefined"){
      window.ethereum.on("accountsChanged", (accounts)=>{
        setWalletAddress(accounts[0]);
      })
    }
    else{
      setWalletAddress("");
    }
  }

  return (
   <>
   <div className='h-[12vh] w-[100vw] flex flex-row justify-between'>
      <div className='mt-5'>
        <img src = {Logo} className='w-[8vw] pl-6 h-[8vh] overflow-hidden'/> 
      </div>
      <div className='w-[60vw] flex  flex-row justify-evenly'>
      <a href='/' className='text-[#4E4B5C] text-xl pt-8 font-extrabold p-5 hover:border-b-2 hover:border-[#f2b880]  '>Home</a>
      <a href='/home' className='text-[#4E4B5C] text-xl pt-8 font-extrabold p-5 border-b-2 border-[#F2B880]'>Route</a>
      <a href='/home' className=' text-xl pt-8 font-extrabold p-3 bg-[#f2b880] text-white border-2 hover:border-[#f2b880] ' onClick={connectWallet}>{
        walletAddress.length > 0 ? `Connected : ${walletAddress.substring(0,6)}...${walletAddress.substring(38)}}` : "Connect Wallet" }</a>
      </div>
   </div>
  
   </>
  )
}

export default Nav
