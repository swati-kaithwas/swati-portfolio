import React from 'react' 
import "./About.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Flip } from 'react-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const experience = [
    {
        title: " Quest GLT ",
        time: "( July 2022 - Present )",
        desc: "Quest Global technologies is an award winning company which works on Blockchain, Salesforce, ERP Implementation, Mobile App Development, Website Development and Custom Software Development",
        img: "quest-glt.jpg",
        role_and_Responsibility: [
          "Worked on Backend and Build website.",
          "Complete major Projects in Specific time.",
          "Team Work with Backend Developers to complete challenge.",
        ],
        achievements :  [
            "Backend have understood very well",
            "Create multiple applications",
            "Build major print website for thousands of user successfully.",
            "Resolved Complex bugs and issues of existing projects.",
          ],                                                                                                                          
      }, 
//     {
//     title: "SalesTown",
//     time: "( March 2022 - September 2022 )",
//     desc: "CRM Software for small and medium business. It's easy to use, quick to setup and scalable.",
//     img: "salestown.png",
//     role_and_Responsibility: [
//       "Worked on Frontend and Build website.",
//       "Complete major Projects in Specific time.",
//       "Team Work with Backend Developers to complete challenge.",
//     ],
//     achievements :  [
//         "Build major print website for thousands of user successfully.",
//         "Leaded frontend team while creating sales town application.",
//         "Resolved Complex bugs and issues of existing projects.",
//       ],                                                                                                                          
//   },  
];

 

const About = () => {
    useEffect(()=>{
        AOS.init({duration: 1500});  
    },[])
    return (
        <div className="about-wrapper" id="about" >
            <h1 data-aos="zoom-in-up"  style={{fontFamily: 'Raleway, sans-serif', marginTop:"20px"}}>Experience</h1>
            <div className='about_contaner'>
                {experience.map((e)=>{
                         return( 
                              <div data-aos="flip-up" className='experience'>
                                <div className='imag'>
                                    <img style={{height:"100%", width:"350px",}} src= {e.img} alt={e.img} />
                                </div>
                                <div style={{textAlign:'left'}}>
                                    <p><span style={{fontSize:"20px", fontWeight:"bold"}}>{e.title}</span> {e.time}</p>
                                    <p>{e.desc}</p>
                                    <br />
                                    <p style={{fontWeight:"bold"}}>Role and Responsibility -</p>
                                    <ul style={{marginLeft:"10px"}}> 
                                        {e.role_and_Responsibility.map((el) => (
                                           <li style={{marginLeft:"10px",listStyle:"block",listStyleType:"square"}}> {el}</li>
                                        ))} 
                                    </ul>  
                                    <br />
                                    <p style={{fontWeight:"bold"}}>Achievements -</p>
                                    <ul style={{marginLeft:"10px"}}> 
                                        {e.achievements.map((el) => (
                                           <li style={{marginLeft:"10px",listStyle:"block",listStyleType:"square"}}> {el}</li>
                                        ))} 
                                    </ul> 
                                </div> 
                              </div> 
                        )
                })} 
            </div>
        </div>
    );
}

export default About