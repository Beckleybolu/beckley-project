import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link} from 'react-router-dom'
import { FaLinkedin, FaTwitter} from 'react-icons/fa';
import { useGlobalConext } from '../context';
const Sidebar = () => {
    const{showSideBar,closeSideBar} = useGlobalConext();
    
  return (
    <aside className={`${showSideBar? 'sidebar show-sidebar':'sidebar'}`}>
        <div className="sidebar-header">
            <div className="close-btn-container">
            <button onClick={closeSideBar} className='close-btn'>
                <FaTimes className='fa-times'/>
            </button>
            </div>



            <div className="side-container">

            <ul className="sidebar-links">
            <li>
                    <h4>01.</h4>
                    <Link to='/' onClick={closeSideBar}>Home</Link>
                </li>
                <li>
                    <h4>02.</h4>
                    <Link to='/about' onClick={closeSideBar}>About</Link>
                </li>
                <li>
                    <h4>03.</h4>
                    <Link to='/project' onClick={closeSideBar}>Project</Link>
                </li>
                <li>
                    <h4>04.</h4>
                    <Link to='/contact' onClick={closeSideBar}>Contact</Link>
                </li>
           </ul>

            <div className="resume-container">
                <button>Resume</button>
            </div>
            </div>
          
        </div>
    </aside>
  )
}

export default Sidebar