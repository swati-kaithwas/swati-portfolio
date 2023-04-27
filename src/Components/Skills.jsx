import React from 'react'
import "./Skills.css"
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(()=>{
        AOS.init({duration: 1500});  
    },[])
    return (
        <div className="skills-container" id='skills'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
            </style>
           
            <h1  data-aos="zoom-in-up">Tech Skills</h1>
            <div className="aboutContent">
                <div className="iconsContainer">
                    
                    <div className="icon"  data-aos="fade-right" >
                        <img src="react.png" alt="react" width="90px" height="90px "/>
                        <p>React</p>
                    </div> 
                     
                    <div className="icon"  data-aos="fade-right">
                        <img  src="javascript.png" alt="react" width="90px" height="90px"/>
                        <p>JavaScript</p>
                    </div>
                    
                    <div className="icon"  data-aos="fade-right">
                        <img src="html.png" alt="react" width="90px" height="90px"/>
                        <p>HTML</p>
                    </div>
                   
                    <div className="icon"  data-aos="fade-right">
                        <img src="css.png" alt="react" width="90px" height="90px"/>
                        <p>CSS</p>
                    </div>
                   
                    <div className="icon"  data-aos="fade-left">
                        <img src="redux.png" alt="react" width="90px" height="90px"/>
                        <p>Redux</p>
                    </div>
                     
                    <div className="icon"  data-aos="fade-left">
                        <img src="nodejs.png" alt="react" width="90px" height="90px"/>
                        <p>Node js</p>
                    </div>
                     
                    <div className="icon"  data-aos="fade-left">
                        <img src="tailwind.png" alt="react" width="90px" height="90px" />
                        <p>Tailwind</p>
                    </div>
                  
                    <div className="icon"  data-aos="fade-left">
                        <img src="mongodb.png" alt="react" width="90px" height="90px"/>
                        <p>MongoDB</p>
                    </div>
                   
                </div>
                <h2 style={{textDecoration:"underline", marginTop:"40px"}}  data-aos="zoom-in-up">Proficiencies</h2>
                <div className="iconsContainer1">
                    
                    <div className="icon" data-aos="fade-up">
                        <img src="frontend.png" alt="react" width="90px" height="90px"/>
                        <p>Frontend</p>
                    </div>
                    <div className="icon" data-aos="fade-up">
                        <img src="backend.png" alt="react" width="90px" height="90px"/>
                        <p>Backend</p>
                    </div>
                    <div className="icon" data-aos="fade-up">
                        <img src="ds.png" alt="react" width="90px" height="90px"/>
                        <p>Data Structures <br/> & Algorithms</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Skills
