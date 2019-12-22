import React from 'react'

const Roster = (props) => {
  return (
    <section id="roster" className="section">
      <div className="section__inner">
        <h2>Roster</h2>
        {props.squads.map(squad =>
          <span  key={squad.name}>
            <h3>{squad.name}</h3>
            <table className="table table-inverse">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="no-mobile">Rank</th>
                  <th className="no-mobile">Position</th>
                  <th>Role</th>
                  <th className="no-mobile">Enlisted</th>
                </tr>
              </thead>
              <tbody>
                {props.members.filter(member => member.position.includes(squad.name)).map(member =>
                  <tr key={member.nickname}>
                    <td className="member-name">
                      {member.name || member.nickname}
                    </td>
                    <th className="no-mobile member-remark" scope="row">
                      {member.remark}
                    </th>
                    <td className="no-mobile member-position">
                      {member.position}
                    </td>
                    <td className="member-role">
                      {member.role}
                    </td>
                    <td className="no-mobile member-joined">
                      {member.joined}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <hr />
          </span>
        )}
      </div>
    </section>
  )
}

export default Roster