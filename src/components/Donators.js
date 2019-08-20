import React from 'react'

const Donators = (props) => {
  return (
    <section id="donators" class="section">
      <div class="section__inner">
        <h2>This Months Donators</h2>
        <p>Thank you for your support to keep us going strong.</p>
        <ul class="donators">
          {props.donators.map(donator =>
            <li>
              {donator.name}
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Donators