import { useState, useEffect, useRef } from "react";
import InfSimpleLogo from "../../images/INF-simple-Logo2.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav__container">
        <a className="nav__container__logo" href="/#page-top">
          <img
            alt="Iron-Fists Logo"
            src={InfSimpleLogo}
            style={{ width: "40px", height: "100%" }}
          />
          <h7>Iron-Fists</h7>
        </a>
        <label className="nav__container__menu-toggle" htmlFor="nav-menu">
          Menu
          <svg
            width="24"
            height="24"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
          >
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
          </svg>
        </label>
      </div>

      <input
        type="checkbox"
        className="a11y"
        id="nav-menu"
        checked={menuOpen}
        onChange={(e) => setMenuOpen(e.target.checked)}
      />
      <ul className="nav__elements">
        <li>
          <a className="page-scroll" href="/#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a className="page-scroll" href="/#join" onClick={closeMenu}>
            Join
          </a>
        </li>
        <li>
          <a
            className="page-scroll"
            target="_blank"
            href="https://discord.gg/sAjVrD3fS2"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Discord
          </a>
        </li>
        <li>
          <a
            href="ts3server://ts3.iron-fists.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            TeamSpeak
          </a>
        </li>
        <li>
          <a className="page-scroll" href="/#clanRules" onClick={closeMenu}>
            Clan Rules
          </a>
        </li>
        <li>
          <a className="page-scroll" href="/#servers" onClick={closeMenu}>
            Server Rules
          </a>
        </li>
        <li>
          <a className="page-scroll" href="/#news" onClick={closeMenu}>
            News
          </a>
        </li>
        <li>
          <a className="page-scroll" href="/#roster" onClick={closeMenu}>
            Roster
          </a>
        </li>
        <li>
          <a className="page-scroll" href="/#donate" onClick={closeMenu}>
            Donate
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
