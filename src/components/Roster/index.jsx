
const Roster = (props) => {
  return (
    <section id="roster" className="section">
      <div className="section__inner">
        <h2>Roster</h2>
        <div className="roster-grid">
        {props.squads.map(squad =>
          <div key={squad.name} className="roster-item">
            <h3>{squad.name}</h3>
            <table className="table table-inverse">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="no-mobile">Position</th>
                  <th className="no-mobile">Enlisted</th>
                </tr>
              </thead>
              <tbody>
                {props.members.filter(member => member.position.includes(squad.name)).map(member =>
                  <tr key={member.nickname}>
                    <td className="member-name">
                      {member.name || member.nickname}
                    </td>
                    <td className="no-mobile member-position">
                      {member.position.replace(squad.name, "").trim()}
                    </td>
                    <td className="no-mobile member-joined">
                      {member.joined}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        </div>
        </div>
    </section>
  )
}

export default Roster