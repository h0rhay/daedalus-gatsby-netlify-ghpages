import React from 'react';

import iconMultiWallet from '../../assets/images/icon-multi-wallet.svg';
import iconSecurity from '../../assets/images/icon-security.svg';
import circle from '../../assets/images/circle.svg';

const LearnMore = (props) => {
  return (
    <section className="learn-more pt-3 pb-5" id='learnMore'>  
      <div className="row text-left pt-2">
        <div className="col-sm-10">
          <h2 className="text-right mt-5 mb-5 text-uppercase">Learn More</h2>
          <div className="learn-more-links text-right">
            <strong><a className="d-block mt-5" href="https://whycardano.com" target="_blank" rel="noopener noreferrer">Why Cardano</a></strong>
            <strong><a className="d-block mt-3" href="https://cardanodocs.com" target="_blank" rel="noopener noreferrer">Cardano SL Documentation</a></strong>
            <strong><a className="d-block mt-3" href="https://cardanodocs.com" target="_blank" rel="noopener noreferrer">Cardano Explorer</a></strong>
            <strong><a className="d-block mt-3" href="https://cardanoroadmap.com" target="_blank" rel="noopener noreferrer">Cardano Roadmap</a></strong>
            <strong><a className="d-block mt-3" href="https://cardano.org" target="_blank" rel="noopener noreferrer">Cardano.org</a></strong>
            <strong><a className="d-block mt-3" href="https://forum.cardano.org/" target="_blank" rel="noopener noreferrer">Cardano Forum</a></strong>
            <strong><a className="d-block mt-3" href="https://cardanofoundation.org" target="_blank" rel="noopener noreferrer">Cardano Foundation</a></strong>
            <strong><a className="d-block mt-3" href="https://staking.cardano.org" target="_blank" rel="noopener noreferrer">Cardano Staking</a></strong>
          </div>
        </div>

        <div className="col-sm-4 p-0">
          <hr/>
          <div className="link"><img src={circle} className="circle" alt=""/></div>
        </div>

        <div className="col-sm-10">
          <h2 className="text-left mt-5 mb-5 text-uppercase">Wallet Features</h2>
          <div className="wallet-features">
            <img className="d-inline mr-3" src={iconMultiWallet} alt='wallet icon'/>><h3 className="d-inline text-uppercase">Unlimited Accounting</h3>
            <p><small>Manage any number of wallets with our hierarchical deterministic (HD) wallet implementation. Have more control over how your funds are organised. Use our powerful back-up and recovery features to recover your funds if necessary.</small></p>
            <img className="d-inline mr-3" src={iconSecurity} alt='security icon'/>><h3 className="d-inline text-uppercase">Advanced Security</h3>
            <p><small>We do not hold your keys. You are in control of your money. We use cryptography to protect your funds against attack and offer spending passwords and seeds for all your accounts.</small></p>
          </div>
        </div>
      </div>
    </section>

      )
}

export default LearnMore