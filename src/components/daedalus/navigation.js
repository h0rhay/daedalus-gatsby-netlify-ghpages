import React from 'react'
import { Link } from 'gatsby';

// import { IconContext } from "react-icons";
// import { FaDownload } from 'react-icons/fa';

const Navigation = (props) => {

  const activeSwitch = (path) => {
    if (typeof window !== 'undefined') {
      return `nav-link ${window.location.pathname === path ? `active` : `` }`
    }
  }

  const NavStyles = {
    margin: '0 auto',
    maxWidth: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <button className={`navbar-toggler ${props.align}`} type="button" data-toggle="collapse" data-target="#nav-top"
        aria-controls="nav-top" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="nav-top">
        <div className="rust-nav-wrap">
          <ul className="nav navbar-nav mr-auto rust-nav" style={NavStyles}>
            <li className="nav-item">
              <Link className={`nav-link ${activeSwitch(`/`)}`} to='/'>
              <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeSwitch(`/team`)}`} to='/team'>
              <strong>Team</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeSwitch(`/#downloadSection`)}`} to='/#downloadSection'>
              <strong>Download</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
