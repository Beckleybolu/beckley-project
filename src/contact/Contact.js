import React,{useState} from 'react'
import { useGlobalConext } from '../context'
import Alertmsg from './alertmsg';


const Contact = () => {
  const{showSideBar} = useGlobalConext();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [alert,setAlert] = useState({show:false})

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(name && email && message){
      console.log(name,email,message);
      setEmail('');
      setMessage('');
      setName('')
      showAlert(true);
    }
  }
const showAlert = (show = false)=>{
  setAlert({show});
}
  return (
    <section className={`${ showSideBar ? 'section-container section-filter' : 'section-container'}`}>
      <div className="contact-container">
        <span>04.</span>
        <h4>Contact</h4>
      </div>
      <form onSubmit={handleSubmit} className="form-container">

        <div className="contact name">
        <label htmlFor="name">Your Name</label>
        <input type="text" id='name' value={name} onChange={(e)=> setName(e.target.value)} required placeholder='Enter Your Name'/>
        </div>
       
        <div className="contact email">
        <label htmlFor="email">Email Address</label>
        <input type="email" id='email' value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder='Enter Your Email'/>
        </div>
       
        <div className="contact message">
        <label htmlFor="name">Your Message</label>
        {/* <input className='contact-msg' type="text" id='name' value={message} onChange={(e)=> setMessage(e.target.value)} required/> */}
        <textarea  name="" id="" cols="40" rows="10" required value={message} onChange={(e)=> setMessage(e.target.value)} placeholder='Your Message...'></textarea>
        </div>
       <button type='submit' className='contact-btn'>Shoot</button>
      </form>

      {alert.show && <Alertmsg removeAlert = {showAlert}/>}
      
    </section>
  )
}

export default Contact