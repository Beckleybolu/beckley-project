import React from 'react'
import {CgPlayButton} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { useGlobalConext } from '../context'

const About = () => {
  const{showSideBar} = useGlobalConext();
  return (
    <section className={`${ showSideBar ? 'section-container section-filter' : 'section-container'}`}>
      
      <h4 className="about">
        <span>01.</span>About me
      </h4>
      <div className="about-flex">
      <div className="about-para">
      <p className="about-info">
        Hello! My name is Bolu. I enjoy creating things that are visible on the internet. My interest in web development started back in the year 2021, when I saw my friend creating an e-commerce website for a client. It then piqued my interest to learn about it. 
      </p>
      <p className='about-info2'>
        Fast-Forward to today, I have been able to get the required knowledge and skill to become a front-end developer, and I have been able to create some <Link to='/project' className='about-project'>projects</Link> over the course of time.
      </p>
      <p about='about-info3'>Here are a few technologies I have been working on recently:</p>
      
      <div className="about-grid">

<div className="grid html">
  <CgPlayButton className='cg'/>
<p>Html 5</p>
</div>

<div className="grid css">
<CgPlayButton className='cg'/>
<p>Css</p>
</div>

<div className="grid javascript">
<CgPlayButton className='cg'/>
<p>Javascript {'(ES6+)'}</p>
</div>

<div className="grid reactjs">
<CgPlayButton className='cg'/>
<p>Reactjs</p>
</div>

<div className="grid version">
<CgPlayButton className='cg'/>
<p>Git version control</p>
</div>

</div>
      </div>

  <div className="img-container">
        <img src="/image/bolu.jpg" alt="bolu" className='bolu-img' />
      </div>
 </div>
     
      
    </section>
  )
}

export default About