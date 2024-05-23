import { React } from 'react'
import'./HeaderArea.css'
import fb from './images/fblogo.png'
import pic from './images/me.jpg'
import {AiOutlineSearch ,AiFillHome , AiOutlineWallet} from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icons/md'
import {FaFacebookMessenger, FaRegFlag,FaUsers,FaBell} from 'react-icons/fa'
import { MdApps } from "react-icons/md";
import Mainarea from'./Mainarea.jsx';


//import './App.css'
//import './index.css'

const App = () => {
  return (
<div className='Homepage'>

<div className='Header  '>


    <div className='Firstheader  '>
    <div className='logo'>
    <img src={fb} alt="fb" className="fb w-[3rem] h-[40px] mt-1 mr-1"/> 
    <div className='search'>
    < AiOutlineSearch  style={{height:"4rem"}}/>
    <input type='text' placeholder="Search Facebook" className=' p-1 rounded-2xl ml-2 text-[1rem] text-center bg-gray-100 border-0'/>
    </div> 
</div>
</div>

<div className=' middleheader '>
  <div className='icon'>
<AiFillHome  color='#1877F2' fontSize={"2.3rem"} /> </div>
<div className='icon'>
<MdOndemandVideo  fontSize={"2.3rem"}  /> </div>
<div className='icon'>
<FaRegFlag fontSize={"2.3rem"}  /> </div>
<div className='icon'>
<FaUsers fontSize={"2.3rem"} /> </div>
<div className='icon'>
<AiOutlineWallet  fontSize={"2.3rem"}  /> </div>
</div>

<div className='thirdheader  '>
  <div className='menu'>
<MdApps  fontSize={"2.3rem"} className='ml-2'/> </div>
<div className='menu'>
<FaFacebookMessenger fontSize={"2.3rem"} className='2'/> </div>
<div className='menu'>
<FaBell fontSize={"2.3rem"} className='ml-2'/> </div>
<div className='mi'>
<img src={pic} alt="fb" className="pic w-[5rem] h-[50px] mr-[0.5rem]"/> </div>

 </div>
    
'
  
   </div> 
   <Mainarea/>
   </div>
  )
}
  export default App