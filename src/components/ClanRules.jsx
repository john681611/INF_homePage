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
              <li>Attend Sessions or post AWOL on Discord.</li>
              <li>Play and communicate as part of a squad.</li>
              <li>Have mods sorted before sessions begin.</li>
              <li>
                Be able to use TeamSpeak (For ArmA 3 sessions and Meetings).
              </li>
              <li>Not use Cheats/Hacks.</li>
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
                <b>Tuesday: Free Night</b> <br /> Members choice any game no
                AWOL posts needed.
              </li>
              <li>
                <b>Thursday: General Night</b> <br /> Less serious:
                GameMaster/Zeus, Tactics & Systems & OFCRA PvP.
              </li>
              <li>
                <b>Sunday: Mission Night</b> <br /> Take on a serious mission
              </li>
            </ul>
          </div>
          <div>
            <h4>General Rules and Customs</h4>
            <ul className="list">
              <li>
                <b>Clan-Tag: INF.</b>
                <br />
                To be used in TeamSpeak and games where possible.
              </li>
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClanRules;
