import React from 'react'

export const Contact = () => {
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
            <div id="form">
                <label className='label'>Name:</label><br></br>
                <input type='text' placeholder='First Name' className="contactinput"/>
                <input type='text' placeholder='Last Name' style={{marginLeft:'10px'}} className="contactinput"/>
                <br></br>
                <label className='label'>Email:</label>
                <br></br>
                <input type='email' placeholder="example@gmail.com" className="contactinput" required/>
                <br></br>
                <label className='label'>Phone:</label><br></br>
                <input type='number' className="contactinput"/><br></br>
                <label className='label'>Message:</label><br></br>
                <textarea className="contactinput" rows={5} cols={50}></textarea>
                <br></br>
                <center>
                <button type='submit' id="sendmessage">Send Message</button>
                </center>
            </div>
        </div>
    </div>
  )
}
export default Contact;