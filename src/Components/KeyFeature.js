import React from 'react'
import "./KeyFeature.css"
export default function KeyFeature() {
  return (
    <div>
        <div className="parentKeyFeature">
            <div className="leftKeyFeature">
                <img src={"./desktop.png"}/>
            </div>
            <div className="rightKeyFeature">
                <p className="whyChoose">Why choose us</p>
                <h1 className="keyFeature">Key Features</h1>
                <div className="Description">
                    <div>
                        <img src={"./expand.png"} alt="expand" className="favImage"/>
                    </div>
                    <div>
                        <h3>Expand Your Reach</h3>
                        <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div> 
                </div>
                <div className="Description">
                    <div>
                        <img src={"./annual.png"} alt="expand" className="favImage"/>
                    </div>
                    <div>
                        <h3>Annualized Growth</h3>
                        <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div> 
                </div>
                <div className="Description">
                    <div>
                        <img src={"./book.png"} alt="expand" className="favImage"/>
                    </div>
                    <div>
                        <h3>Book Your Providers</h3>
                        <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}
