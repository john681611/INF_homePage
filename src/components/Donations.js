import React from 'react'

const Donators = (props) => {
  return (
    <section id="donators" className="section">
      <div className="section__inner">
        <h2>This Months Donators</h2>
        <p>Thank you for your support to keep us going strong.</p>
        <ul className="donators">
          {props.donators.map(donator =>
            <li  key={donator.name}> 
              {donator.name}
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Donators