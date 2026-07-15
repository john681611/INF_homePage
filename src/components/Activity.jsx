const serverStatusStyle = {
  border: 0,
  margin: "0 auto",
  minWidth: "15vw",
};
const Activity = (props) => {
  return (
    <>
      <div>
        <h5>TeamSpeak Activity</h5>
        <div id="ts3viewer_1014112" className="ts-viewer"></div>
      </div>
      <div>
        <h5>Servers</h5>
        <div>
            <a href="https://www.battlemetrics.com/servers/reforger/34371654">
          <img
            src="https://cdn.battlemetrics.com/b/standardVertical/34371654.png?foreground=%23ffffff&background=%23000000&lines=%23333333&linkColor=%23dba21c&chartColor=%23dba21c&chart=players%3A7D&showPlayers=&maxPlayersHeight=40"
            alt="Reforger Member Server Status"
            style={serverStatusStyle}
          />
          </a>
          <a href="https://www.battlemetrics.com/servers/reforger/37966997">
          <img
            src="https://cdn.battlemetrics.com/b/standardVertical/37966997.png?foreground=%23ffffff&background=%23000000&lines=%23333333&linkColor=%23dba21c&chartColor=%23dba21c&chart=players%3A7D&showPlayers=&maxPlayersHeight=40"
            alt="Reforger Public Server Status"
            style={serverStatusStyle}
          />
          </a>
        </div>
      </div>
    </>
  );
};

export default Activity;
//https://cdn.battlemetrics.com/b/standardVertical/37966997.png?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A7D&chartColor=%23FF0700&showPlayers=&maxPlayersHeight=40
