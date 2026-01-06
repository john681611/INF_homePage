import React from 'react'

const Donations = (props) => {
  return (
    <section id="donators" className="section">
      <div className="section__inner">
        <h4>This Months Donors</h4>
        <p>Thank you for your support to keep us going strong.</p>
        <ul className="donators">
          {props.donators.map(donator =>
            <li  key={donator.name}> 
              <b>{donator.name}</b>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Donations