import React from "react";

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
        {props.servers.map((server) => (
          <span key={server.name}>
            <h3>{server.name}</h3>
            <p>
              <a
                href={server.info.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                title={server.info.link}
                className="postlink"
              >
                <img
                  alt=""
                  resizemod="off"
                  className="lazyload"
                  data-src={server.info.src}
                  border="0"
                  width="100%"
                  title=""
                />
              </a>
            </p>
            {server.file ? (
              <span>
                <a
                  className="btn"
                  href={`https://ironfists.azurewebsites.net/modlist/${server.id}`}
                  download={`INF_${server.name}_preset.html`}
                >
                  Download Preset
                </a>
                <p className="smalltxt">Drag and drop file into Launcher</p>
              </span>
            ) : null}
            {Object.keys(server.mods).map((key) => (
              <span key={key}>
                {server.mods[key].length > 0 ? (
                  <span>
                    <h4>{key}</h4>
                    <p>
                      {server.mods[key].map((mod) => (
                        <a
                          key={mod.steamID}
                          className="btn mod"
                          href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.steamID}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {mod.name}
                        </a>
                      ))}
                    </p>
                  </span>
                ) : null}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Servers;
