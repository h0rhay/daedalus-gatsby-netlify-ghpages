
import React from 'react'
export default (data) =>
  (
    <div className='content'>
      <h3>Installer integrity</h3>
      <p>SHA256 checksum can be verified using the following command:</p>
      <p><code>$ shasum -a 256 ~/Downloads/daedalus-0.12.0-cardano-sl-2.0.0-mainnet-macos-3788.pkg</code></p>
      <p>Instead of typing the path to the Daedalus installer executable use drag and drop:</p>
      <ol>
        <li>Open Terminal</li>
        <li>Type or paste: shasum -a 256 </li>
        <li>Press space key</li>
        <li>Drag and drop Daedalus installer from Finder to Terminal</li>
        <li>Press enter key</li>
      </ol>
      <p>You should see the following output, where string on the second line is the SHA256 checksum:</p>
      <p><code>
          {data.sha}
          ~/Downloads/daedalus-0.12.0-cardano-sl-2.0.0-mainnet-macos-3788.pkg</code></p>
    </div>
  )
