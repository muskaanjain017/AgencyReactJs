import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div>
        <div className="foot">
            <div><p className="grayFoot">Helping you <span className="footBold">maximize</span> operations<br/> management with digitization</p></div>
            <div><h3>Office</h3><p className="grayFoot">359 Hidden Valley<br/> Road, NY</p></div>
            <div><h3>Contact</h3><p className="grayFoot">(+01) 234 568</p></div>
        </div>
        <div className="footImg">
            <img src={"./fbInsTw.png"}/>
        </div>
    </div>
  )
}
