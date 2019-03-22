import React from 'react'
import { Link } from 'gatsby'

import Logo from './main-daedalus-logo'

const Header = (props) => (

  <section className="hero" id='header'>
    <div className="container text-center">
      <Link to="/" >
        <Logo />
      </Link>
      <h2 className="text-uppercase"><span className='thin-heading'>Daedalus</span> Wallet</h2>
    </div>
  </section>

)

export default Header
