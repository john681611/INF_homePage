import React from 'react'
import reforgerLogo from '../images/arma-reforger-logo.png'

const Header = (props) => {
  return (
    <section className="intro">
      <div>
          <img alt="" src={reforgerLogo}/>
          <img alt="" className="lazyload" data-src="/images/logo-desktop.png"/>
          <b>Play Fair and with Honour</b>
    </div>
  </section>
  )
}
     
export default Header