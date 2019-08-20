import React from 'react'
 
const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer__copyright">Copyright &copy; John Harvey {new Date().getFullYear()}</p>
      <div className="footer__credits">
          <p>This site was created using content of Bohemia Interactive a.s</p>
          <p>Copyright © 2018 Bohemia Interactive a.s. All rights reserved.</p>
          <p>See www.bistudio.com for more information.</p>
      </div>
      <script async src="https://ironfists.azurewebsites.net/js/main.js"></script>
  </footer>
  )
}
 
export default Footer