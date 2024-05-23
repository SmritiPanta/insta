import React from 'react';
import './Mainarea.css';
import { MdMoreHoriz, MdVideoCall } from 'react-icons/md';

import { FaAngleDown,  FaFacebookMessenger, FaFontAwesomeFlag, FaMedrt,FaUserFriends,FaSearch,FaGrin, FaRegThumbsUp, FaCommentAlt, FaRegShareSquare  } from 'react-icons/fa';
import { AiFillFileImage } from 'react-icons/ai';
 function Mainarea(){
    return(
        <div className='Main'>

            <div className='Rside'>
                <div className='profile'>
                    <img src="/images/img5.jpg"alt="dp" style={{height:"50px",padding:"1rem"}}/>
                    Smriti Panta
                </div>
                <div className='pro'>
                    <FaUserFriends color="blue" fontSize="2rem"/>
                    <div>
                        Friends
                    </div>
                </div>
                <div className='pro'>
                    <FaFontAwesomeFlag color="green" fontSize="2rem"/>
                    <div>
                        Pages
                    </div>
                </div>
                <div className='pro'>
                    <FaMedrt color="blue" fontiSze="2rem"/>
                    <div> COVID-19 Information Center</div>
                </div>
                <div className='pro'>
                    <FaFacebookMessenger color="green" fontSize="2rem"/>
                    <div >
                        Messenger Kids
                    </div>
                    </div>
                    
                <div className='pro'>
                    <FaAngleDown color="green" fontSize="2rem"/>
                    <div>
                        See More
                    </div>
                    </div>
                    <br></br>
                    <div className='profiles'>
                        <img src="/images/img1.jpg" alt ='logo' style={{height:"35px",padding:"1rem"}}/>
                        React Developer     
                </div>
                <div className='profiles'>
                        <img src="/images/img2.jpg" alt ='logo' style={{height:"35px",padding:"1rem"}}/>
                        Java Developer    
                </div>
                <div className='profiles'>
                        <img src="/images/img3.jpg" alt ='logo' style={{height:"35px",padding:"1rem"}}/>
                        Nextjs Developer     
                </div>
                <div className='profiles'>
                        <img src="/images/img4.jpg" alt ='logo' style={{height:"35px",padding:"1rem"}}/>
                        Python Developer     
                </div>
                <div className='pross'>
                    <FaAngleDown color="blue" fontsize ="2rem"/>
                    <div>See More</div>
                </div>
            </div>
            <div className='Mainarea'>
            <div className='addstory'>
            <div className='story'>
            <img src="/images/img2.jpg" alt ='logo' style={{height:"50px", width:'50px',padding:"1rem", borderRadius:"50%"}}/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
          Dark
            </div>
            <div className='story'>
            <img src="/images/image1.jpg" alt ='logo' style={{height:"50px", width:'50px',padding:"1rem", borderRadius:"50%"}}/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
          Flower
            </div>
            <div className='story'>
            <img src="/images/image2.jpg" alt ='logo' style={{height:"50px", width:'50px',padding:"1rem", borderRadius:"50%"}}/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           View
            </div>
            <div className='story'>
            <img src="/images/img1.jpg" alt ='logo' style={{height:"50px", width:'50px',padding:"1rem", borderRadius:"50%"}}/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
          Sand
            </div>
            </div>
            <div className=' message'>
                <div className='text'>
                    <div className='post'>
                        <img src="/images/image2.jpg" alt='dp'/>
                        <input type="Mind" placeholder="What's on your mind, Smriti?"/>
                    </div>
                    
                    <div className='call'>
                        <div className='ico'>
                        <div className='icone'>
                            <MdVideoCall fontSize="2rem" color="red"/>
                            <div>
                                LiveVideo
                            </div>
                            </div>

                            <div className='icone'>
                            <AiFillFileImage fontSize="2rem" color="green"/>
                            <div> Photo/Video</div>
                            </div>
                            <div className='icone'>
                            <FaGrin fontSize="2rem" color="orange"/>
                            <div> Felling/activity</div>
                            </div>

                    </div>
                </div>           
            </div>
            <div className='posted'>
                <div className='poster'>
                    <div className='simplelearn'>
                    <img src="/images/image2.jpg" alt='img' style={{height:"50px",width:"50px", borderRadius:"50%"}}/>
                    Simplelearn
                    <div className='update'>  Update her cover image.</div>
                    </div>
                    <div className='edit'> <MdMoreHoriz fontsize="1.5rem"/></div>
                </div>
                <div className='caption'>
                    Please be kind to Animals.
                </div>
                <br></br>
                <div className='Facebookimg'>
                <img src="/images/image2.jpg" alt='img' style={{height:"auto",width:"100%", borderRadius:"50%"}}/>
                </div>
                <div className='comment'>
                    < div className='like'>
                        <FaRegThumbsUp color ="grey"/>Like
                    </div>
                    < div className='like'>
                        <FaCommentAlt color ="grey"/>Comment
                    </div>
                    < div className='like'>
                        <FaRegShareSquare color ="grey"/>Share
                    </div>
                </div>
            </div>
            </div>         
            </div>
            
           
            
            <div className='Lside'>
            <div className='Contact'>
            <div className='contacts'>
                Contacts
            </div>
        
        <div className='Chaticon'>
        <div className='icons'>
            <MdVideoCall fontSize='1.8rem'/>
            </div>
            <div className='icons'>
            <FaSearch fontSize='1.8rem'/>
            </div>
            <div className='icons'>
            <MdMoreHoriz fontSize='1.8rem'/>
            </div>
            </div>
            </div>
            
            <div className='concise'>
                <div className='profilee'>
            <img src ="images/image1.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
            Smriti 
            </div>
            <div className='profilee'>
            <img src ="images/image1.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
            Swikriti
            </div>
            <div className='profilee'>
            <img src ="images/image1.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
           Rupesh
            </div>
            <div className='profilee'>
            <img src ="images/image1.jpg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
            Suyog
            </div>
            </div>
            </div>
            </div>
            
    )

 }
export default Mainarea