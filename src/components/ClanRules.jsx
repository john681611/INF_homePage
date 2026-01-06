const ClanRules = (props) => {
  return (
    <section id="clanRules" className="section">
      <div className="section__inner">
        <h2>Clan Rules</h2>
        <h3>Members must:</h3>
        <ul className="list">
          <li>
            <b>17 or older.</b>
          </li>
          <li>
            <b>Attend Sessions or post AWOL.</b>
          </li>
          <li>
            <b>Play and communicate as part of a squad.</b>
          </li>
          <li>
            <b>Have mods sorted before sessions begin.</b>
          </li>
          <li>
            <b>Be able to use TeamSpeak (For ArmA 3 sessions and Meetings).</b>
          </li>
          <li>
            <b>Not use Cheats/Hacks.</b>
          </li>
        </ul>
        <h3>Weekly Schedule</h3>
        <p>
          All sessions start at
          <b> 9pm UK</b> Time we ask you try and be present at
          <b> 8:30</b>.
        </p>
        <p>
          Command plans in a open meeting monthly and posts schedule on discord
        </p>
        <ul className="list">
          <li>
            <b>Tuesday: Free Night</b> - No AWOL posts needed, members can play
            whatever game they want (preferably together).
          </li>
          <li>
            <b>Thursday: General Night</b> - Less serious: GameMaster/Zeus,
            OFCRA big PvP.
          </li>
          <li>
            <b>Sunday: Mission Night</b> - Take on a serious mission
          </li>
        </ul>
        <h3>General Rules and Customs</h3>
        <ul className="list">
          <li>
            <b>Clan-Tag: INF.</b>
            <p>To be used in TeamSpeak and games where possible.</p>
          </li>
          <li>
            <b>Call-sign: Iron 2</b>
            <p>Iron 2-0, Iron 2-1 etc.</p>
          </li>
          <li>
            <b>24hr warning must be given for large mod changes</b>
            <p>preferably server running to test.</p>
          </li>
          <li>
            <b>One and Done mission rules to be announced at mission start.</b>
            <p>
              Members are not required to stick about if they die in a one and
              done scenario (leaving players may miss out if a mission is
              restarted).
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ClanRules;
