import React from "react";

const About = (props) => {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <p>
          Iron-Fists is a UK based ArmA clan that takes a semi-professional
          approach to operations. We like a challenge, often playing way
          out-numbered and out-gunned. Our Primary focus is Arma Reforger
          although we still regularly play ArmA 3 and other games as a clan.
        </p>
        <p>
          All Major Decisions are put to a squad vote. All members are listened
          to rank is only used for tie breakers. Any member can volunteer to lead a mission or event.
        </p>
        <h4>Leadership</h4>
        <p>
          For day to day running:
          <br />
          {/* Command structure style? */}
          <b>INF_H@wKEYE</b> - Squad CO
          <br />
          <b>INF_Rhys</b> - 2IC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>INF_Mike64</b> - 3IC
        </p>
      </div>
    </section>
  );
};

export default About;
