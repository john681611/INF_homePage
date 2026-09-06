
const serverStatusContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  alignItems: "flex-start",
  justifyContent: "center",
};

const Activity = () => {
  return (
    <>
      <div>
        <h5>TeamSpeak Activity</h5>
        <div id="ts3viewer_1014112" className="ts-viewer"></div>
      </div>
      <div>
        <h5>Servers</h5>
        <div style={serverStatusContainerStyle}>
          <img src="https://cdn.battlemetrics.com/b/standardVertical/34371654.png?foreground=%23ffffff&linkColor=%23dba21c&lines=%23333333&background=%23000000&chart=players%3A24H&chartColor=%23dba21c&showPlayers=1&maxPlayersHeight=300" />
          <img src="https://cdn.battlemetrics.com/b/standardVertical/37966997.png?foreground=%23ffffff&linkColor=%23dba21c&lines=%23333333&background=%23000000&chart=players%3A24H&chartColor=%23dba21c&showPlayers=1&maxPlayersHeight=300" />
        </div>
      </div>
    </>
  );
};

export default Activity;
