const ClanRules = (props) => {
  return (
    <section id="clanRules" className="section-wide">
      <div className="section__inner">
        <h2>Clan Rules</h2>
        <div className="clanRules__grid">
          <div>
            <h4>Weekly Schedule</h4>
            <p>
              <b>8:30pm UK Time</b> for <b>9pm kickoff</b>.
              <br />
              Open Monthly Planning with Schedule posted on{" "}
              <a
                href="https://discord.gg/sAjVrD3fS2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              .
            </p>
            <ul className="list">
              <li>
                <b>Tuesday:</b> Unofficial Squad Session
                <br />
                Members choice any game no AWOL posts needed.
              </li>
              <li>
                <b>Thursday:</b> Official Training/Mission/Joint ops
                <br />
                Less serious: Casual missions, Tactics, Systems & OFCRA PvP.
              </li>
              <li>
                <b>Sunday:</b> Official Active Mission
                <br />
                Serious: One life missions & Campaigns.
              </li>
            </ul>
          </div>
          <div>
            <h4>Members must</h4>
            <ul className="list">
              <li>
                Be <b>17</b> or older.
              </li>
              <li>
                Belong <b>only to INF</b> and no other <b>ArmA</b> squad.
              </li>
              <li>
                Attend <b>all official sessions</b> or <b>post AWOL</b> on{" "}
                <a
                  href="https://discord.gg/sAjVrD3fS2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
                .
              </li>
              <li>
                Have and use{" "}
                <a
                  href="https://www.teamspeak3.com/teamspeak-download.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TeamSpeak App
                </a>
                .
              </li>
              <li>
                Use the <b>INF_</b> tag before their callsign on{" "}
                <a
                  href="ts3server://ts3.iron-fists.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TeamSpeak.
                </a>
              </li>
              <li>Not use cheats or hacks.</li>
              <li>Accuse others of cheating publicly.</li>
              <li>Play and communicate as a cohesive unit.</li>
              <li>
                Be approved by <b>Command.</b>
              </li>
              <li>Not share confidential INF information.</li>
              <li>Respect the chain of command and authority.</li>
              <li>Be ready to join sessions by the start time.</li>
              <li>
                Attend or post AWOL for the annual role call or be removed from
                the group.
              </li>
            </ul>
          </div>
          <div>
            <h4>General Rules and Customs</h4>
            <ul className="list">
              <li>
                <b>Rule:</b> Any changes to the rules must be approved by the
                members with a majority vote
              </li>
              <li>
                Call-sign: <b>Iron 2.</b>
              </li>
              <li>
                <b>Minimum 24hr warning must be given for:</b>
                <br />
                Official Sessions and large mod changes.
              </li>
              <li>
                <b>
                  One and Done mission rules to be announced at mission start.
                </b>{" "}
                Members are not required to stick about if they die.
              </li>
              <li>
                Server passwords to be found in the rules channel on{" "}
                <a
                  href="https://discord.gg/sAjVrD3fS2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClanRules;
