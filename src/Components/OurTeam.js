import React from "react";
import "./OurTeam.css";

export default function OurTeam() {
  return (
    <div className="team">
      <button type="button" className="ourteam">
        Our Team
      </button>
      <h1>Meet our awesome team</h1>
      <p id="topdesc">
        loremVeniam ex do ad cupidatat occaecat. Elit fugiat consectetur aliquip
        elit deserunt minim deserunt reprehenderit.
        <br /> Nulla eu officia non tempor amet commodo do commodo elit laborum
        laboris.
      </p>
      <div className="teamrows">
        <div className="teambox">
          <div className="teamnames">
            <div>
              <img src={"./pic1.jpg"} />
            </div>
            <div className="teamMemberName">
              <h3>Michael Jackson</h3>
              <p className="designationblue">CEO</p>
            </div>
          </div>
          <div>
            <p className="teamdesc">
              loremCupidatat magna sint ipsum commodo eiusmod nisi ea. Velit
              dolor veniam minim cillum voluptate. Officia sit pariatur non
              magna reprehenderit quis.
            </p>
            <div className="Social">
                <img src={"./fbInsta.png"}/>
            </div>
          </div>
        </div>
        <div className="teambox">
          <div className="teamnames">
            <div>
              <img src={"./pic2.jpg"} />
            </div>
            <div>
              <div className="teamMemberName">
                <h3>Oprah Winfrey</h3>
                <p className="designationblue">Head of Development</p>
              </div>
            </div>
          </div>
          <div>
            <p className="teamdesc">
              loremCupidatat magna sint ipsum commodo eiusmod nisi ea. Velit
              dolor veniam minim cillum voluptate. Officia sit pariatur non
              magna reprehenderit quis.
            </p>
            <div className="Social">
                <img src={"./fbInsta.png"}/>
            </div>
          </div>
        </div>
        <div className="teambox">
          <div className="teamnames">
            <div>
              <img src={"./pic3.jpg"} />
            </div>
            <div>
              <div className="teamMemberName">
                <h3>Leonardo</h3>
                <p className="designationblue">Head of Operations</p>
              </div>
            </div>
          </div>
          <div>
            <p className="teamdesc">
              loremCupidatat magna sint ipsum commodo eiusmod nisi ea. Velit
              dolor veniam minim cillum voluptate. Officia sit pariatur non
              magna reprehenderit quis.
            </p>
            <div className="Social">
                <img src={"./fbTw.png"}/>
            </div>
          </div>
        </div>
        <div className="teambox">
          <div className="teamnames">
            <div>
              <img src={"./pic4.jpg"} />
            </div>
            <div>
              <div className="teamMemberName">
                <h3>Jerry Seinfeld</h3>
                <p className="designationblue">Head of Department</p>
              </div>
            </div>
          </div>
          <div>
            <p className="teamdesc">
              loremCupidatat magna sint ipsum commodo eiusmod nisi ea. Velit
              dolor veniam minim cillum voluptate. Officia sit pariatur non
              magna reprehenderit quis.
            </p>
            <div className="Social">
                <img src={"./fbInsTw.png"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
