import React from 'react'

const Roster = (props) => {
  return (
    <section id="roster" class="section">
      <div class="section__inner">
        <h2>Roster</h2>
        {props.squads.map(squad =>
          <span>
            <h3>{squad.name}</h3>
            <table class="table table-inverse">
              <thead>
                <tr>
                  <th>Name</th>
                  <th class="no-mobile">Rank</th>
                  <th class="no-mobile">Position</th>
                  <th>Role</th>
                  <th class="no-mobile">Enlisted</th>
                </tr>
              </thead>
              <tbody>
                {props.members.filter(member => member.squad === squad.id).map(member =>
                  <tr>
                    <td>
                      {member.name}
                    </td>
                    <th class="no-mobile" scope="row">
                      {member.rank}
                    </th>
                    <td class="no-mobile">
                      {member.pos}
                    </td>
                    <td>
                      {member.role}
                    </td>
                    <td class="no-mobile">
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