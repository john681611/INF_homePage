const ClanRules = (props) => {
  return (
    <section id="clanRules" className="section-wide">
      <div className="section__inner">
        <h2>Clan Rules</h2>
        <div className="clanRules__grid">
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
                Attend <b>all official sessions</b> or{" "}
                <b>post AWOL on Discord.</b>
              </li>
              <li>Have and use TeamSpeak.</li>
              <li>
                Use the <b>INF_</b> tag before their callsign on Teamspeak.
              </li>
              <li>Not use cheats or hacks.</li>
              <li>Accuse others of cheating publicly.</li>
              <li>Play and communicate as a cohesive unit.</li>
              <li>Be approved by Command.</li>
              <li>Not share confidential INF information.</li>
              <li>Respect the chain of command and authority.</li>
              <li>Be ready to join the server without undue delay by the stated start time.</li>
              <li>Attend or post AWOL for the annual role call or be removed from the group.</li>
            </ul>
          </div>
          <div>
            <h4>Weekly Schedule</h4>
            <p>
              <b>8:30pm UK Time</b> for <b>9pm kickoff</b>.
              <br />
              Open Monthly Planning with Schedule posted on Discord.
            </p>
            <ul className="list">
              <li>
                <b>Tuesday: Free Night</b>
                <br />
                Members choice any game no AWOL posts needed.
              </li>
              <li>
                <b>Thursday: General Night</b>
                <br />
                Less serious: GameMaster/Zeus, Tactics & Systems & OFCRA PvP.
              </li>
              <li>
                <b>Sunday: Mission Night</b>
                <br />
                Take on a serious mission
              </li>
            </ul>
          </div>
          <div>
            <h4>General Rules and Customs</h4>
            <ul className="list">
              <li>Any changes to the rules must be approved by the members with a majority vote</li>
              <li>
                <b>Call-sign: Iron 2.</b>
                <br />
                Iron 2-0, Iron 2-1 etc.
              </li>
              <li>
                <b>24hr warning must be given for large mod changes.</b>
                <br />
                Preferably a server running.
              </li>
              <li>
                <b>
                  One and Done mission rules to be announced at mission start.
                </b>
                <br />
                Members are not required to stick about if they die.
              </li>
              <li>Server passwords can be found in the rules channel on Discord.</li>
              <li>ALL events must be planned well in advance and communicated clearly to all members, including time zones, server details, team sizes, and passwords.</li>
              <li>All details must be shared at least 24 hours in advance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClanRules;
