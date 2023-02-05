import React,{useEffect} from "react";


const Alertmsg = ({removeAlert}) => {


    useEffect(()=>{
        const timeout = setTimeout(()=>{
            removeAlert();
        },3000)

        return ()=> clearTimeout(timeout);
    },[])
  return (
    <div className="alert-msg">Message Delivered!</div>
  )
}

export default Alertmsg