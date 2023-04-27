
import React, { useState } from 'react'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {Link} from "react-scroll"
import { useEffect } from 'react'
 

export const Navbar = () => {
    const resume = () => {
        window.open("https://drive.google.com/file/d/1Hclk8cYVIVGCHnz0NTwELLlvoaSXhbJm/view","_blank")
    } 
    const [showMediaIcons, setShowMediaIcons] = useState(false)  

    useEffect(()=>{
        const nav = document.querySelector('.main-nav');
        let lastScrollY = window.scrollY; 
        window.addEventListener('scroll',()=>{
          if(lastScrollY < window.scrollY){
            nav.classList.add('main-nav--hidden');
          }else{
            nav.classList.remove('main-nav--hidden');
          }  
          lastScrollY =window.scrollY

        }) 
    })
    return (
    <>
     <nav className='main-nav'>
         <div className='logo'>
        <h2>
            <span>S</span>wati
            <span>K</span>aithwas
        </h2>
         </div>
         <div className={showMediaIcons ? "menu-link mobile-menu-link":"menu-link"}>
             <ul>
                 <li> 
                     <a href='#'>
                         <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                        >Home</Link>
                     </a>
                 </li> 
                 <li> 
                 <a href='#'><Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                    >About</Link>
                     </a>
                 </li>
                 <li> 
                 <a href='#'><Link activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                    >Skills</Link>
                     </a>
                 </li>
                 <li> 
                 <a href='#' ><Link activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                    >Projects</Link>
                     </a>
                 </li>
                 <li> 
                 <a href='#'> <Link activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {()=>setShowMediaIcons(!showMediaIcons)}
                    >Contact</Link>
                     </a>
                 </li>
             </ul>
         </div>
         <div className='resume'>
             <ul className='resume-desktop'> 
                 <li>
                 <button className="homeBtns" onClick={() => resume()}> View Resume </button>
                 
                 </li>
             </ul>
             <div className='hamburger-menu'>
                 <a href='#' onClick = {()=>setShowMediaIcons(!showMediaIcons)}>
                     <GiHamburgerMenu />
                     </a>
             </div>
         </div>
     </nav> 
    </> 
    )
}
export default Navbar