import React,{useRef,useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { BiMenuAltRight} from 'react-icons/bi'
import { useGlobalConext } from "./context";

const Nav = () => {
    // const [showLinks,setShowLinks] = useState(false);
    // const links = useRef(null);
    // const linksContainer = useRef(null);

    // useEffect(()=>{
    //     const linksHeight = links.current.getBoundingClientRect().height;
    //     if(showLinks){
    //         linksContainer.current.style.height = `${linksHeight}px`
    //     }else{
    //         linksContainer.current.style.height = `0px`
    //     }
    // },[showLinks])
    const{openSideBar} = useGlobalConext();
    
  return (
   
    <>
    <nav>
       <div className="nav-container">
       {/* first layer */}
        <div className="btn-container">
            <Link to='/'><h4>B</h4></Link>
            <button onClick={openSideBar} className="btn">
            <BiMenuAltRight className="bars" />
            </button>
            {/* <h4 className="logo">B</h4> */}
          
        </div>
        {/* second layer */}
        <div className="links-container">
            <ul className="links">
            <li>
                    <h4>01.</h4>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                <h4>02.</h4>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                <h4>03.</h4>
                    <Link to='/project'>project</Link>
                </li>
                <li>
                <h4>04.</h4>
                    <Link to='/contact'>Contact</Link>
                </li>
                
                <button className="resume">Resume</button>
            
            </ul>
            
        </div>
    </div>
    
    </nav>
 
    </>
  )
}

export default Nav