import React from 'react'
import { useGlobalConext } from '../context';
import { Link } from 'react-router-dom';



const Homepage = () => {
    const{showSideBar} = useGlobalConext();

  return (
      <section className={`${showSideBar ? 'section-container section-filter' : 'section-container'}`}>
          <div className="homepage">
      <h4 className="intro">
          Hi, my name is
       </h4>
       <h1 className="intro-name">
        beckley bolu.
       </h1>
       <p className="intro-job">
          I build things for the web.
       </p>
       <p className="intro-info">
        I'm a frontend developer that specializes in building user friendly product. I love to craft scalable frontend projects with great user experience.
       </p>
       <Link to='/about' className='home-link'>Learn more.</Link>
          </div>
      </section>
  )
}

export default Homepage