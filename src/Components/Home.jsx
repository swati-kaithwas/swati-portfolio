import React, { useEffect } from "react";
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => { 

    const resume = () => {
        window.open("https://drive.google.com/file/d/1Hclk8cYVIVGCHnz0NTwELLlvoaSXhbJm/view", "_blank")
    }
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/swati-kaithwas13/", "_blank")
    }
    const github = () => {
        window.open("https://github.com/swati-kaithwas", "_blank")
    }

    useEffect(()=>{
        AOS.init({duration: 1000});  
    },[])

    return (
        <>
            <div className="hom-container" id="home">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
                </style>
                <img data-aos="zoom-in" style={{ borderRadius: "100%" }} src="swati'sprofile.png" alt="profile" width="30%" className="hom_img" />
                <div className= "hom-box">
                    <h4 data-aos="fade-up" >Hello, I'm </h4>
                    <h4 data-aos="fade-up" ><span className="name">Swati Kaithwas</span> </h4>

                    <h4 data-aos="fade-up" style={{margin:"20px 0"}}>Backend web developer.</h4> 
                    <p data-aos="fade-up" >I am passionate about building challenging projects and excelling in their development, and looking forward to create a mark for myself as a Software Developer.</p>
                    <div className="social">
                        <button data-aos="fade-up" className="tooltip" onClick={() => github()}>
                            <img style={{ margin: "0 4px", cursor: "pointer" }} src="github1.png" alt="github" width="35px" />
                            <span className="tooltiptext">GitHub</span>
                        </button>
                        <button data-aos="fade-up" className="tooltip" onClick={() => linkedin()}>
                            <img style={{ margin: "0 4px", cursor: "pointer" }} src="linkedin.png" alt="linkedin" width="35px" />
                            <span className="tooltiptext">Linkedin</span>
                        </button> 
                    <button data-aos="fade-up" className="homeBtns" onClick={() => resume()}> View Resume </button>
                     
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home