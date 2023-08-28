import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contactForm">
        <p className="contact">Contact Us</p>
        <h1>We will <span className="blue">be glad</span> to hear<br/> from you!</h1>
        <p className="dept">Department:</p>
        <input type="radio" name="department"/>Support
        <input type="radio" name="department"/>Sales
        <br/>
        <form>
            <input type="text" name="subject" placeholder="Subject" className="form"/><br/>
            <input type="text" name="name" placeholder="Name" className="form"/><br/>
            <input type="text" name="email" placeholder="name@example.com" className="form"/><br/>
            <textarea rows="4" name="address" placeholder="Message..." className="form"/><br/>
            <input type="file" name="file" className="form"/><br/>
            <div className="flexcheck">
                <div>
                    <input type="checkbox" name="agree"/><p className="check">I agree to terms and conditions.</p>
                </div>
                <div>
                    <button className="checkSub">Submit</button>
                </div>
            </div>
            
        </form>
        
    </div>
  )
}
