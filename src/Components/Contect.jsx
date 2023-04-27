import React from 'react'
import "./Contect.css"
import Bounce from 'react-reveal/Bounce';
import emailjs from "emailjs-com"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
    useEffect(()=>{
        AOS.init({duration: 1500});  
    },[])
    
    const medium = () => {
        window.open("https://medium.com/me/stories/public","_blank")
    }
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/swati-kaithwas13/","_blank")
    }
    const github = () => {
        window.open("https://github.com/swati-kaithwas", "_blank")
    }
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_mudy05a', 'template_dfqunao', e.target, 'user_fA3a0O2Kos8ITxSKS3Tey')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          alert("Thank you for contacting me !")
      }
    return (
        <div className="con-container" id='contact'>
             <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
            </style>
            <h1 style={{paddingBottom:"30px", marginTop:"20px",marginBottom:"30px"}}data-aos="zoom-in-up">Contact Me</h1>
            <div className="con-wrapper"> 
                    <div className="con-box" data-aos="fade-right">
                        <div className="small">
                            <p>If you are an employer looking for a dedicated web developer, feel free to drop me a message.</p>
                        </div>
                        <div className="big">
                            <form onSubmit={sendEmail}>
                                <input className="input" type="text" placeholder="Name" name="name" /> <br/>
                                <input className="input" type="email" placeholder="Email" name="email" /> <br/>
                                <input className="input" type="text" placeholder="Organization" name="org" /> <br/>
                                <textarea className="input" placeholder="Enter your Message here" name="message"></textarea>
                                <input className="submit" type="submit" value="SUBMIT" />
                            </form> 
                        </div>
                    </div> 
                    <div className="con-box" data-aos="fade-left">
                        <div  className="big">
                            <table>
                                <tr>
                                    <td>Name :</td>
                                    <td>Swati kaithwas</td>
                                </tr>
                                <tr>
                                    <td>Email :</td>
                                    <td>swatikaithwas8@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Phone :</td>
                                    <td>(+91) 9140883109</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td>Uttar Pradesh, India</td>
                                </tr>
                            </table>
                        </div>
                        <div  className="small">
                            <h4 style={{textDecoration:"underline"}}>Get In Touch</h4>
                            <div style={{display:"flex", justifyContent:"center", marginBottom:"5px"}}>
                                <button className="tooltip" onClick={() => github()}>
                                    <img style={{margin:"0 4px", cursor:"pointer"}} src="github1.png" alt="github" width="25px"/>
                                    <span className="tooltiptext">GitHub</span>
                                </button>
                                <button className="tooltip" onClick={() => linkedin()}>
                                    <img style={{margin:"0 4px", cursor:"pointer"}} src="linkedin.png" alt="linkedin" width="25px"/>
                                    <span className="tooltiptext">Linkedin</span>
                                </button>
                                {/* <button className="tooltip" onClick={() => medium()}>
                                    <img style={{margin:"0 4px", cursor:"pointer"}} src="medium.png" alt="Medium" width="25px"/>
                                    <span className="tooltiptext">Medium</span>
                                </button> */}
                            </div>
                        </div>
                    </div>
                 
            </div>
          
        <hr/>
            <div>
                <p className="footer">Developed by <span style={{fontWeight:"bolder"}}>Swati kaithwas</span> </p>
               
            </div> 
        </div>
    )
}

export default Contact
