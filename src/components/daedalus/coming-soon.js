import React from 'react';

// import iconMultiWallet from '../../assets/images/icon-multi-wallet.svg';
// import iconSecurity from '../../assets/images/icon-security.svg';
import iconReact from '../../assets/images/icon-react.svg';
import iconPlugins from '../../assets/images/icon-plugins.svg';
import iconApi from '../../assets/images/icon-api.svg';
import iconElectron from '../../assets/images/icon-electron.svg';
import iconMonitor from '../../assets/images/icon-monitor.svg';
import iconSettings from '../../assets/images/icon-settings.svg';

import uielements from '../../assets/images/ui.svg';


const ComingSoon = (props) => {
  return (
    <section className="coming-soon" id='comingSoon'>
      <div className="row mb-3">
        <div className="col-sm-16 offset-sm-4">
        <h2 className="text-center mt-4 mb-2 text-uppercase">Coming Soon</h2>
        <p className="text-center">Future releases of Daedalus will allow third party developers to build innovative applications directly for the wallet. Whether you would like micro credit, to set up recurring payments, or to exchange cryptocurrencies, it will be easy to customize your Daedalus experience!</p>
        </div>
      </div>
      <div className="row text-center">
        
        <div className="col-sm-10 coming-soon-left pb-5 pt-5">
          <img className="w-100" src={uielements} alt='ui elements'/>
        </div>

        <div className="col-sm-4 coming-soon-middle pb-5">
          <hr/>
        </div>

        <div className="col-sm-10 coming-soon-right pb-5 pt-4">
          <div className="wallet-features text-left">
            <div className="coming-soon-item">
              <img className="d-inline mr-3" src={iconElectron} alt='electron'/><h3 className="d-inline text-uppercase">BUILT WITH WEB TECHNOLOGIES</h3>
              <p><small>Daedalus is built on top of Electron, a battle-proven open source platform for writing cross-platform desktop apps using Javascript, HTML and CSS.</small></p>
            </div>
            <div className="coming-soon-item">
              <img className="d-inline mr-3" src={iconPlugins} alt='plugins'/><h3 className="d-inline text-uppercase">EXTEND WITH PLUG-INS</h3>
              <p><small>The core features of Daedalus are just the beginning. Our goal is to give anyone the power to extend Daedalus with custom plug-ins, automation and just about any innovation you can come up with!</small></p>
            </div>
            <div className="coming-soon-item">
              <img className="d-inline mr-3" src={iconApi} alt='API'/><h3 className="d-inline text-uppercase">RICH AND SECURE INTERFACE</h3>
              <p><small>You don’t have to be a specialist in cryptography and security to build amazing plug-ins for Daedalus. We provide you with rich and secure APIs to interact with cryptocurrency backends.</small></p>
            </div>
            <div className="coming-soon-item">
              <img className="d-inline mr-3" src={iconReact} alt='react'/><h3 className="d-inline text-uppercase">USER INTERFACE FRAMEWORK</h3>
              <p><small>To keep the experience consistent for Daedalus users and simplify the workflow for developers, we have created a small but flexible React UI framework that you can use to build beautiful plugins that just merge into the whole platform.</small></p>
            </div>
            <div className="coming-soon-item">
              <img className="d-inline mr-3" src={iconMonitor} alt='monitor'/><h3 className="d-inline text-uppercase">DESIGN YOUR DAEDALUS PLUGINS</h3>
              <p><small>You don’t need to hire a designer to come up with a great user interface design. We provide you with the frameworks and design specs to make your design fit into the ecosystem.</small></p>
            </div>
            <div className="coming-soon-item">
              <img className="d-inline mr-3" src={iconSettings} alt='settings'/><h3 className="d-inline text-uppercase">GENERATE CUSTOM THEMES</h3>
              <p><small>You will be able to easily adjust the current color theme for all components in the Daedalus Design Language. The best thing about this: developers just have to follow our guidelines to use the component framework to make this work.</small></p>
            </div>
          </div>
        </div>
      </div>
    </section>

      )
}

export default ComingSoon