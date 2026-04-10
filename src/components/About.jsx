import React from "react";

const About = (props) => {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <p>
          Iron-Fists is a UK based ArmA clan that takes a semi-professional
          approach to operations. We like a challenge, often playing way
          out-numbered and out-gunned. Our Primary focus is ArmA Reforger
          although we still regularly play ArmA 3 and other games as a clan.
        </p>
        <p>
          All Major Decisions are put to a squad vote. All members are listened
          to, rank is only used for tie breakers. Any member can volunteer to lead a mission or event.
        </p>
      <div>
      </div>
        <h4>Leadership</h4>
        <p>For day to day running:</p>
        <div className="leadership">
          <div className="leadership__row leadership__row--top">
            <span><b>INF_H@wKEYE</b> - Squad CO</span>
          </div>
          <div className="leadership__row leadership__row--bottom">
            <span><b>INF_Mike64</b> - 2IC</span>
            <span><b>INF_Bangie</b> - 3IC</span>
          </div>
        </div>
         <h5>TeamSpeak Activity</h5>
          <div id="ts3viewer_1014112" className="ts-viewer"></div>
      </div>
    </section>
  );
};

export default About;
