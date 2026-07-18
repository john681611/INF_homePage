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
            src="https://cdn.battlemetrics.com/b/standardVertical/34371654.html?_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InN0YW5kYXJkVmVydGljYWwiLCJzZXJ2ZXIiOjM0MzcxNjU0LCJvcHRpb25zIjp7ImZvcmVncm91bmQiOiIjZmZmZmZmIiwibGlua0NvbG9yIjoiI2RiYTIxYyIsImxpbmVzIjoiIzMzMzMzMyIsImJhY2tncm91bmQiOiIjMDAwMDAwIiwiY2hhcnQiOiJwbGF5ZXJzOjdEIiwiY2hhcnRDb2xvciI6IiNkYmEyMWMiLCJtYXhQbGF5ZXJzSGVpZ2h0IjoiMzAwIn0sImxpdmVVcGRhdGVzIjp0cnVlLCJ1c2VyX2lkIjoxMjIwMjk4LCJpYXQiOjE3ODQ0MDg3MDR9.60CP6mAb5eTVJs-QQyrAor5h_E0afLqY-QWffKE31rg"
            frameBorder="0"
            style={serverStatusStyle}
            name="azrqo"
            data-scale="1.2"
            data-size-group="server-status"
            title="Reforger Member Server Status"
          ></iframe>
          <iframe
            src="https://cdn.battlemetrics.com/b/standardVertical/37966997.html?_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InN0YW5kYXJkVmVydGljYWwiLCJzZXJ2ZXIiOjM3OTY2OTk3LCJvcHRpb25zIjp7ImZvcmVncm91bmQiOiIjZmZmZmZmIiwibGlua0NvbG9yIjoiI2RiYTIxYyIsImxpbmVzIjoiIzMzMzMzMyIsImJhY2tncm91bmQiOiIjMDAwMDAwIiwiY2hhcnQiOiJwbGF5ZXJzOjdEIiwiY2hhcnRDb2xvciI6IiNkYmEyMWMiLCJtYXhQbGF5ZXJzSGVpZ2h0IjoiMzAwIn0sImxpdmVVcGRhdGVzIjp0cnVlLCJ1c2VyX2lkIjoxMjIwMjk4LCJpYXQiOjE3ODQ0MDg1NDN9.xuqvT85ZSI2oIb36OlDvG8wzPSrWL7b4cdbacpYBR5w"
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
