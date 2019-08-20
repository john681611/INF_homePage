import React from 'react'

const Header = (props) => {
  return (
    <section className="intro">
      <div>
        <img alt="Arma 3" className="lazyload" data-src="/images/arma3logo.png"/>
          <img alt="" className="lazyload" data-src="/images/logo-desktop.png" />
          <h1>Iron-Fists</h1>
          <p className="intro__text">Play Fair and with Honour</p>
          <a href="#news" className="btn btn-circle page-scroll">
            <svg width="40" height="40" fill="#FFF" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
            </svg>
          </a>
    </div>
  </section>
  )
}
     
export default Header