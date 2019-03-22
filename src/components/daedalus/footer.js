import React from 'react'
import { Link } from 'gatsby'

// import { IconContext } from "react-icons";
import { FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';

import iohk from '../../assets/images/iohk.svg'

  const iconStyle = {
    fontSize: '1.5rem',
    margin: '10px',
    color: 'rgba(255, 255, 255, 0.65)',
  }
    const iconStyleRed = {
    fontSize: '1.5rem',
    margin: '10px',
    color: '#2cbb69',
  }


const Footer = (props) => 
  (
    <footer className="footer mt-5 small" id='footer'>
      <div className="container">
        <div className="row footer-strip">
          <div className="col-24">
            <div className="float-left pt-2 mob-text-center col-md-10">
              <h2 className="d-inline" style={{}}>Daedalus 2019</h2>
              <a href="https://github.com/input-output-hk/daedalus" target="_blank" rel="noopener noreferrer">
                <FaGithub style={iconStyleRed} /></a>
            </div>
            <div className="float-right col-md-14">
              <div className="row">
                <div className="col-md-15 mob-text-center text-right">
                  <img className="d-inline mr-2" src={iohk} style={{height:'40px'}} alt='iohk logo'/>
                  <h2 className="d-inline">IOHK-Supported Project</h2>
                </div>
                <div className="col-md-9 mob-text-center text-right">
                  <a href="https://twitter.com/InputOutputHK" target="_blank" rel="noopener noreferrer">
                    <FaTwitter style={iconStyle} /></a>
                  <a href="mailto:info@cardano.org">
                    <FaEnvelope style={iconStyle} /></a>
                  <a href="https://github.com/input-output-hk/daedalus" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={iconStyle} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top  border-light mt-2 pt-4">

          <div className="col-md-16 col-sm-24">
            <h5>Daedalus is an <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="highlight">open-source</a>
              project.
            </h5>
            <p>
              Cardano is a software platform ONLY and does not conduct any independent diligence on, or substantive review
              of, any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely
              responsible for evaluating your investments, for determining whether you will exchange blockchain assets
              based on your own judgment, and for all your decisions as to whether to exchange blockchain assets with
              Cardano. In many cases, blockchain assets you exchange on the basis of your research may not increase in
              value, and may decrease in value. Similarly, blockchain assets you exchange on the basis of your research may
              fall or rise in value after your exchange.
            </p>
            <p>
              Past performance is not indicative of future results. Any investment in blockchain assets involves the risk
              of loss of part or all of your investment. The value of the blockchain assets you exchange is subject to
              market and other investment risks.
            </p>
            <Link to="/tos">Terms of Service</Link> | <a href="https://iohk.zendesk.com/hc/en-us/sections/360002144313-Updates"
              target="_blank" rel="noopener noreferrer">Release Notes</a>
            <br />
            <br />
          </div>

          <div className="col-md-4 col-sm-10 col-xs-10">
            <h5>More about Cardano</h5>
            <ul className="list-unstyled p-0 m-0 links">
              <li><a href="https://cardanoexplorer.com" title="An open source block explorer for the Cardano project"
                  target="_blank" rel="noopener noreferrer">Cardano Explorer</a></li>
              <li><a href="https://cardanofoundation.org" title="Supervisory and educational body for the Cardano Protocol"
                  target="_blank" rel="noopener noreferrer" >Cardano Foundation</a></li>
              <li><a href="https://cardanodocs.com" title="Full technical documentation of the project" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://github.com/input-output-hk/cardano-sl" title="Cardano SL repository" target="_blank" rel="noopener noreferrer">Cardano
                  SL Source</a></li>
              <li><a href="https://cardanoroadmap.com" title="Cardano Roadmap" target="_blank" rel="noopener noreferrer">Cardano Roadmap</a></li>
              <li><a href="https://cardano.org/en/home" title="Cardano.org" target="_blank" rel="noopener noreferrer">Cardano.org</a></li>
              <li><a href="https://cardanorust.iohkdev.io" title="Cardano Rust" target="_blank" rel="noopener noreferrer">Cardano Rust</a></li>
              <li><a href="https://whycardano.com" title="Why Cardano" target="_blank" rel="noopener noreferrer">Why Cardano</a></li>
              <li><a href="https://testnet.iohkdev.io" title="Cardano Testnets" target="_blank" rel="noopener noreferrer">Cardano Testnets</a></li>
            </ul>
          </div>

          <div className="col-md-4 col-sm-10 col-xs-10">
            <h5>Join the community</h5>
            <ul className="list-unstyled p-0 m-0 links">
              <li><a href="http://cardano.org/en/home/" title="Community hub for the ecosystem" target="_blank" rel="noopener noreferrer">Cardano
                  Community</a></li>
              <li><a href="https://t.me/CardanoAnnouncements/" title="Join the conversation" target="_blank" rel="noopener noreferrer">Cardano
                  Telegram</a></li>
              <li><a href="https://forum.cardano.org/" title="Join the conversation" target="_blank" rel="noopener noreferrer">Cardano Forum</a></li>
              <li><a href="https://www.reddit.com/r/cardano/" title="Join the conversation" target="_blank" rel="noopener noreferrer">Cardano Reddit </a></li>
              <li><a href="https://www.youtube.com/channel/UCBJ0p9aCW-W82TwNM-z3V2w" target="_blank" rel="noopener noreferrer">IOHK YouTube</a></li>
              <li><a href="https://twitter.com/CardanoStiftung" title="Follow the Foundation" target="_blank" rel="noopener noreferrer">Cardano
                  Foundation Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )

export default Footer