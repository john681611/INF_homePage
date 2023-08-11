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
            Register on our&nbsp;
            <a href="https://discord.gg/sAjVrD3fS2">Discord</a> and just ask to join.
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Join