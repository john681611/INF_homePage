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
            src="https://cdn.battlemetrics.com/b/rEwsieVUl/34371654.html?_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MzUiLCJzZXJ2ZXIiOjM0MzcxNjU0LCJvcHRpb25zIjp7ImZvcmVncm91bmQiOiIjZmZmZmZmIiwibGlua0NvbG9yIjoiI2RiYTIxYyIsImxpbmVzIjoiIzMzMzMzMyIsImJhY2tncm91bmQiOiIjMjIyMjIyIiwiY2hhcnQiOiJwbGF5ZXJzOlJUIiwiY2hhcnRDb2xvciI6IiNkYmEyMWMiLCJzaG93UGxheWVycyI6IjEiLCJtYXhQbGF5ZXJzSGVpZ2h0IjoiMzAwIn0sImxpdmVVcGRhdGVzIjp0cnVlLCJ1c2VyX2lkIjoxMjIwMjk4LCJpYXQiOjE3ODQ0NjA5NzZ9.nJZOrHNcafoVw5SW86S_rVMTYEXr1vJDVALJNrmPKGE"
            frameBorder="0"
            style={serverStatusStyle}
            name="azrqo"
            data-scale="1.2"
            data-size-group="server-status"
            title="Reforger Member Server Status"
          ></iframe>
          <iframe
            src="https://cdn.battlemetrics.com/b/rEwsieVUl/37966997.html?_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MzUiLCJzZXJ2ZXIiOjM3OTY2OTk3LCJvcHRpb25zIjp7ImZvcmVncm91bmQiOiIjZmZmZmZmIiwibGlua0NvbG9yIjoiI2RiYTIxYyIsImxpbmVzIjoiIzMzMzMzMyIsImJhY2tncm91bmQiOiIjMDAwMDAwIiwiY2hhcnQiOiJwbGF5ZXJzOlJUIiwiY2hhcnRDb2xvciI6IiNkYmEyMWMiLCJzaG93UGxheWVycyI6IjEiLCJtYXhQbGF5ZXJzSGVpZ2h0IjoiMzAwIn0sImxpdmVVcGRhdGVzIjp0cnVlLCJ1c2VyX2lkIjoxMjIwMjk4LCJpYXQiOjE3ODQ0NjEyOTZ9.WsLLz86SlAk8vq-Bxv0Sz1iWFrG_fSVdspe1YXYOX5o"
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
