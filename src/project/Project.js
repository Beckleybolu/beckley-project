import React from 'react'
import data from '../data'
import { useGlobalConext } from '../context'

const Project = () => {
  const{showSideBar} = useGlobalConext();
  return (
    <section className={`${ showSideBar ? 'section-container section-filter' : 'section-container'}`}>
      <div className="project">
        <span>02.</span>
        <h4>Project</h4>
      </div>

      <div className="project-container">
        {data.map((list)=>{
          const {id,title,info,image} = list;
          return <article key={id} className='single-project'>
            <img src={image} alt={title} className="project-img" />
            <h4>{title}</h4>
            <p>{info}</p>
          </article>
        })}
      </div>

    </section>
  )
}

export default Project