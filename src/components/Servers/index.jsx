import React from "react";

const serverStatusStyle = { border: 0, position: "relative", width: "100%", height: "100%", margin:"0 auto" };
const Servers = (props) => {
  return (
    <section id="servers" className="section">
      <div className="section__inner">
        <h2>Public Server Rules</h2>
        <p>
          These are our rules and guidlines for all our public servers. Our
          servers are a place to have fun &amp; achieve great teamwork and to do
          that we need responsible` players.
        </p>
        <ul className="list">
          <li>
            <b>No cheating!</b>
          </li>
          <li>
            <b>No glitching or farming!</b>
          </li>
          <li>
            <b>No team killing!</b>
          </li>
          <li>
            <b>No uneccesary destruction of buildings, vehicles etc!</b>
          </li>
          <li>
            <b>RESPECT all players!</b>
          </li>
        </ul>
        <p>
          If your found breaking the above, you will be kicked off the server.
          Repeated offences will result in a ban.
        </p>
        <p>
          <b>
            For ease of communication please speak english in the presence of
            INF Members!
          </b>
        </p>
        <p>
          We hope our servers deliver the experience you are looking for, any
          suggestions to make our servers more enjoyable for you just leave a
          post and we will take it seriously.
        </p>
        <p>
          <b>Play Fair and with Honour!</b>
        </p>

        <h2>Servers</h2>

        <iframe
          src="https://cdn.battlemetrics.com/b/horizontal500x80px/34371654.html?foreground=%23ffffff&background=%23000000&lines=%23333333&linkColor=%23dba21c&chartColor=%23dba21c"
          title="Reforger Member Server Status"
          style={serverStatusStyle}
          name="ixrqj"
        ></iframe>
        <iframe
          src="https://cdn.battlemetrics.com/b/horizontal500x80px/37556304.html?foreground=%23ffffff&background=%23000000&lines=%23333333&linkColor=%23dba21c&chartColor=%23dba21c"
          title="Reforger Public Server Status"
          style={serverStatusStyle}
          name="ixrqj"
        ></iframe>
      </div>
    </section>
  );
};

export default Servers;
