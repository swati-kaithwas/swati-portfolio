import React from "react";
import "./Projects.css";
import Flip from 'react-reveal/Flip'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const project = [
    {
        title : "Spotify Clone",
        desc : "This project is made during the construct week of unit-5 at MASAI SCHOOL.In this project, we have used HTML,JavaScript, React, Express, Mongdb, styled them using CSS & Tailwind.",
        img: "sportify.png",
        tech : ["html.png", "css.png", "javascript.png","react.png","redux.png"],
        repo: "https://github.com/swati-kaithwas/spotifyyyy", 
        live: "https://spotifyyyy-henna.vercel.app/welcome", 
    },
    {
        title : "Myntra Clone",
        desc : "This project is made during the construct week of unit-4 at MASAI SCHOOL.In this project, we have used HTML,JavaScript, React, Express, Mongdb, styled them using CSS & Tailwind.",
        img: "myntra.png",
        tech : ["html.png", "css.png","tailwind.png", "javascript.png","react.png","mongodb.png"],
        repo: "https://github.com/swati-kaithwas/MyntraFullStack", 
        live: "https://mysterious-depths-64439.herokuapp.com/", 
    },
    {
        title : "Shop4reebok Clone",
        desc : "This project is made during the construct week of unit-2 at MASAI SCHOOL.In this project, we have used HTML, javascript, styled them using CSS",
        img: "shop4reebok.png",
        tech : ["html.png", "css.png","tailwind.png", "javascript.png","mongodb.png"],
        repo: "https://github.com/swati-kaithwas/shop4reebok", 
        live: "https://smallcaseproject.herokuapp.com/home ", 
    },
    // {
    //     title : "Jiomart Clone",
    //     desc : "This project is made during the construct week of unit-2 at MASAI SCHOOL.In this project, we have used HTML and manipulated dom elements, styled them using CSS.",
    //     img: "jiomart.png",
    //     tech : ["html.png", "css.png", "javascript.png"],
    //     repo: "https://github.com/vaibhavkothiyal/jiomartClone.github.io", 
    //     live: "https://vaibhavkothiyal.github.io/jiomartClone.github.io/html/Index.html"
    // },
    // {
    //     title : "Shoprun Clone",
    //     desc : "This is my individual project at MASAI SCHOOL.In this project, we have used HTML,JavaScript,React JS,Redux,styled them using CSS.",
    //     img: "shoprun.png",
    //     tech : ["html.png", "css.png", "javascript.png","react.png","redux.png"],
    //     repo: "https://github.com/Kamesh255/shops", 
    //     live: "https://shops-ebon.vercel.app/", 
    // },

     
];

const Projects = () => { 
    useEffect(()=>{
        AOS.init({duration: 1500});  
    },[])
    return (
        <div className="pro-wrapper" id="project" >
             <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
            </style>
            <h1  style={{fontFamily: 'Raleway, sans-serif'}} data-aos="fade-up">My Projects</h1>
            <div className= "pro-container">
                {project.map((e) => (
                    <> 
                        <div className= "card" data-aos="flip-left">
                            <img className= "image" src={e.img} alt="project"/>
                            <div className= "text">
                                <h2>{e.title}</h2>
                                <p >{e.desc}</p>
                                <div>
                                    <h4 style={{fontSize:"large"}}>Tech Stack</h4>
                                    <div className= "tech">
                                        {e.tech.map((image) => (
                                            <div style={{margin:"0 10px"}}>
                                                <img src={image} alt={image} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pro-end">
                                <button onClick={() => window.open(`${e.repo}`,"_blank")}>View in GitHub</button>
                                <button onClick={() => window.open(`${e.live}`,"_blank")}>Run Demo</button>
                                </div>  
                            </div> 
                        </div> 
                    </>
                ))} 
            </div>
        </div>
    );
};

export default  Projects ;
