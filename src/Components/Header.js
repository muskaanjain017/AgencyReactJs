import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className="topSection">
      <div className="nav">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>
              <select>
                <option value="company" selected>Company</option>
              </select>
            </li>
            <li>
              <select>
                <option value="blog" selected>Blog</option>
              </select>
            </li>
            <li>Contact</li>
        </ul>
        <div>
          <button className="navButton" id="login" type="submit">Log In</button>
          <button className="navButton" id="signUp" type="submit">Sign Up</button>
        </div>
        
      </div>
      <div className="Head">
        <div className="left"><img src={"./tree.png"} alt="tree image"/></div>
        <div className="mid">
          <button type="button" className="event">New Event</button>
          <h1 className="headline">Exclusive <span className="blue">Agengy</span> for <br/>technology solution.</h1>
          <p className="slogan">We are <span className="blue">Monst,</span> a  Creative Design  Social Marketing|</p>
          <div className="userInput">
            <input type="email" placeholder="Type your email" className="reg"/> 
            <input type="password" placeholder="Password" className="reg"/>
            <button type="submit" id="register">Register</button>
          </div>
        </div>
        <div className="right"><img src={"./box.png"} alt="box image"/></div>
      </div>
      <div className="Curve"><img src="./curve image.png" className='curved-image'/></div>

        
    </div>
  )
}
