import axios from 'axios'
import React, { useState } from 'react'
// import {toast,Toastcontainer} from 'react-toastify'

export const Contact = () => {
  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [email,setemail]=useState('')
  const [phone,setphone]=useState('')
  const [message,setmessage]=useState('')

  const sendmessage=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post("http://127.0.0.1:8000/sendmessage/",{
        firstname,
        lastname,
        email,
        phone,
        message
      })
      if(res.status==200){
        console.log(res.data.username)
        console.log(res.data.err)
        alert("sucess")
        // toast.success("Message is Sended")
      }
    }
    catch(e){
      // toast.error("Some thing Went Wrong,Try Again")
      alert("wrong")
    }
  }
  return (
    <div> 
        <div id="contactpage">
            <div id="contact">
                <center><h1 style={{paddingBottom:'10px'}} >Contact Us</h1></center>
                <p>Feel free to use the form or drop us an email.</p>
                <p>📞 6301022836</p>
                <p>✉️ nagaganesh.mullangi@gmail.com</p>
                <p>10/672,Bellammandi Street</p>
            </div>
            <form id="form" onSubmit={sendmessage}>
                <label className='label'>Name:</label><br></br>
                <input type='text' placeholder='First Name' className="contactinput" onChange={(e)=>setfirstname(e.target.value)}/>
                <input type='text' placeholder='Last Name' style={{marginLeft:'10px'}} className="contactinput" onChange={(e)=>setlastname(e.target.value)}/>
                <br></br>
                <label className='label'>Email:</label>
                <br></br>
                <input type='email' placeholder="example@gmail.com" className="contactinput" onChange={(e)=>setemail(e.target.value)}/>
                <br></br>
                <label className='label'>Phone:</label><br></br>
                <input type='number' className="contactinput" onChange={(e)=>setphone(e.target.value)}/><br></br>
                <label className='label'>Message:</label><br></br>
                <textarea className="contactinput" rows={5} cols={50} required onChange={(e)=>setmessage(e.target.value)}></textarea>
                <br></br>
                <center>
                <button type='submit' id="sendmessage">Send Message</button>
                </center>
            </form>
        </div>
        {/* <Toastcontainer/> */}
    </div>
  )
}
export default Contact;