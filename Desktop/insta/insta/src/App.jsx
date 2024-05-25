import React from 'react'
import'./App.css'
import fb from './images/fblogo.png'
import img1 from './images/google.png'
import img2 from './images/microsoft.png'
import img3 from './images/screenshot1.png'




const App = () => {
  return (
    <div className='bg-white  text-[#01c1e21] flex justify-center items-center h-[100vh] w-[100%]'>
      <div className="left flext justify-center items-center">
       <img src={img3} alt="img3"  className='border-[0.8rem] w-[300px] h-[600px] rounded-3xl border-black'/>
      </div>
      <div className="right  bg-white w-[350px] h-[410px] ml-[4rem] border-2 flex flex-col mt-[-10rem]">
        <h1 className=' title flex justify-center mt-8 font-bold '>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
        <input type='text' className='username border-2 p-2 mt-10 mx-10 bg-[#f3f4f7] text-[0.8rem] ' placeholder='Phone number, username, or email '/>
        <input type='password' placeholder='Password' className='border-2 p-2 mt-2 mx-10 bg-[#f3f4f7] text-[0.8rem]'/>
        <button className=' bg-blue-400 p-2 mt-4 mx-10 text-white text-[0.8rem] font-bold rounded-xl'>Log In</button>
        <h1 className='mt-5 text-[#616163] text-[0.8rem] font-semibold'> OR</h1>
        <div className='flex justify-center items-center mt-6'>
          <img src={fb} alt="fb" className="fb w-[1rem] h-[15px] mr-[0.5rem]"/>
          <p className='text-blue-900 font-semibold text-[0.9rem]'>Log in with facebook</p>
          </div>
         
        <span className=' flex justify-center text-blue-900 mt-5 hover:underline text-[0.75rem]'> Forgot password?</span>

        <div className="container bg-white w-[350px] h-[60px] mt-7 border-2 flex items-start flex-col ">

        <button className='bg-transparent ml-[5rem]  flex items-center text-black-500 mt-6 mx-17 text-sm'>Dont have an account? <span className= 'font-bold text-blue-400'>Sign up </span> </button>
        <h1 className=' flex justify-center mt-6 ml-[8rem] text-[0.9rem]'>Get the app.</h1>
        </div>
      <div className='mt-10 flex justify-center items-center'>
        <img src={img1} alt="img1" className='w-[8rem] h[4rem]' />
        <img src={img2} alt="img2 " className='w-[7rem] h[3rem] ml-2' />
      </div>
      </div>
    </div>
  )
}

export default App