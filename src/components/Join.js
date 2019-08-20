import React from 'react'

const Join = (props) => {
  return (
    <section id="join" className="section">
      <div className="section__inner">
        <h2>Becoming A Member</h2>
        <p>
          Try as we might, a small paragraph isn't going get you hooked. So we recommend joining one of our public servers and have
          a chat with us over Teamspeak. If you like what you have experienced then joining is as easy as.
        </p>
        <ol className="entry-steps">
          <li className="entry-step">
            <div className="entry-step__number">1</div>
            Register on our 
            <a href="http://iron-fists.co.uk/forums/index.php">Forums</a>.
          </li>
          <li className="entry-step">
            <div className="entry-step__number">2</div>
            Fill in a 
            <a href="http://iron-fists.co.uk/forums/app.php/applicationform">Members Form</a>.
           <div className="extra">(no essay required)</div>
          </li>
          <li className="entry-step">
            <div className="entry-step__number">3</div>
            We will get back to you!
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Join