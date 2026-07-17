const serverStatusStyle = {
  border: 0,
  display: "block",
  flex: "0 0 auto",
};

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
          <iframe
            src="https://cdn.battlemetrics.com/b/standardVertical/34371654.html?foreground=%23ffffff&background=%23000000&lines=%23333333&linkColor=%23dba21c&chartColor=%23dba21c&chart=players%3A7D&showPlayers=&maxPlayersHeight=40&_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imhvcml6b250YWw1MDB4ODBweCIsInNlcnZlciI6MzQzNzE2NTQsIm9wdGlvbnMiOnsiZm9yZWdyb3VuZCI6IiNFRUVFRUUiLCJiYWNrZ3JvdW5kIjoiIzIyMjIyMiIsImxpbmVzIjoiIzMzMzMzMyIsImxpbmtDb2xvciI6IiMxMTg1ZWMiLCJjaGFydENvbG9yIjoiI0ZGMDcwMCJ9LCJsaXZlVXBkYXRlcyI6dHJ1ZSwidXNlcl9pZCI6MTIyMDI5OCwiaWF0IjoxNzg0MzAxOTM0fQ.FXhGoKLYJlD24cPGzrYGpWD8_sIlnb-rVSsTrmdObcQ"
            frameBorder="0"
            style={serverStatusStyle}
            name="azrqo"
            data-scale="1.2"
            data-size-group="server-status"
            title="Reforger Member Server Status"
          ></iframe>
          <iframe
            src="https://cdn.battlemetrics.com/b/standardVertical/37966997.html?&_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imhvcml6b250YWw1MDB4ODBweCIsInNlcnZlciI6Mzc5NjY5OTcsIm9wdGlvbnMiOnsiZm9yZWdyb3VuZCI6IiNFRUVFRUUiLCJiYWNrZ3JvdW5kIjoiIzIyMjIyMiIsImxpbmVzIjoiIzMzMzMzMyIsImxpbmtDb2xvciI6IiMxMTg1ZWMiLCJjaGFydENvbG9yIjoiI0ZGMDcwMCJ9LCJsaXZlVXBkYXRlcyI6dHJ1ZSwidXNlcl9pZCI6MTIyMDI5OCwiaWF0IjoxNzg0MzAxNjQzfQ.ndDoMOwn59ozQm8kE-EOagfT0fj-RdP4miHKLGj1FxU&foreground=%23ffffff&background=%23000000&lines=%23333333&linkColor=%23dba21c&chartColor=%23dba21c&chart=players%3A7D&showPlayers=&maxPlayersHeight=40"
            frameBorder="0"
            style={serverStatusStyle}
            name="kvice"
            data-scale="1.2"
            data-size-group="server-status"
            title="Reforger Public Server Status"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Activity;
