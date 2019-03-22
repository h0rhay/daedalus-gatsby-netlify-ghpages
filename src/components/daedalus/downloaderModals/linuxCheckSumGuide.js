import React from 'react'
export default (data) => 
  (
    <div className="content">
      <h3>Installer integrity</h3>
      <p>Verify the sha256 hash: </p>
      <code>sha256sum ~/Downloads/daedalus-0.12.0-cardano-sl-2.0.0-mainnet-x86_64-linux-3788.bin
      </code>
      <p>Expected: </p>
      <code>{data.sha}</code>
    </div>
  )