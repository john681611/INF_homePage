import React from 'react'

const Servers = (props) => {
  return (
    <section id="servers" className="section">
      <div className="section__inner">
        <h2>Servers</h2>
        {props.servers.map(server =>
          <span key={server.name}>
            <h3>
              {server.name}
            </h3>
            <p>
              <a href={server.info.link} target="_blank" rel="noopener noreferrer nofollow" title={server.info.link} className="postlink">
                <img alt="" resizemod="off" className="lazyload" data-src={server.info.src} border="0" width="100%" title="" />
              </a>
            </p>
            {server.file ?
              <span>
                <a className="btn" href={`https://ironfists.azurewebsites.net/modlist/${server.id}`} download={`INF_${server.name}_preset.html`}>Download Preset</a>
                <p className="smalltxt">Drag and drop file into Launcher</p>
              </span>
              : null}
            {Object.keys(server.mods).map(key =>
              <span  key={key}>
                {server.mods[key].length > 0 ?
                  <span>
                    <h4>
                      {key}
                    </h4>
                    <p>
                      {server.mods[key].map(mod =>
                        <a  key={mod.steamID} className="btn mod" href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.steamID}`} target="_blank" rel="noopener noreferrer">
                          {mod.name}
                        </a>
                      )}
                    </p>
                  </span>
                  : null}
              </span>
            )}
          </span>
        )}
      </div>
    </section>
  )
}

export default Servers