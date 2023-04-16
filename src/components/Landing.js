import React from 'react'

const Landing = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed  w-[100vw] h-[100vh]">
    <div className=''>
        <div className='mt-7 text-[#606FF0]'>
          <a href="/" className='text-xl pl-14 pt-5 font-bold'>Z+ Atlas</a>
        </div>
        <div className=''>
        <h1 className='text-8xl overflow-y-hidden font-lato font-extrabold leading-[13vh]  w-[60vw] pl-[7vw] pt-[10vh]'>Travel, the Safest and Easiest Way</h1>
        <p className='mt-4 text-[3.5vh] text-[#4E4B5C] w-[60vw] pl-[7vw] '>The best and the safest paths for a hassle<br/> free and safe travel.</p>
        <div className='pl-[7vw] mt-[9vh]'>
        <button className='bg-[#1F2562] p-6 pl-8 pt-4 pb-4 text-[2.5vh] font-lato btn text-extrabold text-white rounded-2xl hover:bg-[#606FF0]'
        id="i" onClick={()=>{window.location.href="/home"}}>
        <div className='flex flex-row justify-evenly'>
        <p className='mr-6'>Start Now</p>
        <div className='rounded-full bg-white w-[2vw] '>
        <i class="fa-solid fa-arrow-right pt-2 hover:text-[#606FF0]" style={{color:"#384b6b"}} id="btn"></i>
        </div>       
        </div>
        </button>
        </div>
        </div>
        <div className=''>
        </div>
    </div>
    
    </div>
  )
}

export default Landing
