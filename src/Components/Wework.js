import React from 'react'
import './Wework.css'
export default function Wework() {
  return (
    <div className="parentWeWork">        
       <div className="leftWeWork">
        <h2 className='how-we-work'>How we work?</h2>
            <div className="list">
                <span>1</span> Expand Your Reach
            </div>
            <div className="list">
                <span>2</span> Annualized Growth
            </div>
            <div className="list">
                <span>3</span> Book Your Providers
            </div>
       </div>
       <div className="rightWeWork">
        <img src={"./research.png"} alt="Research image"/>
       </div>
    </div>
  )
}
