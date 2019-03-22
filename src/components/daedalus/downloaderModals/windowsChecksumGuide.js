import React from 'react'
export default (data) => 
  (
    <div className='content'>
      <h3>Installer integrity</h3>
      <p>SHA256 checksum can be verified using the following command:
        <code>certutil -hashfile
          C:\Users\YOUR_USERNAME\Downloads\daedalus-0.12.0-cardano-sl-2.0.0-mainnet-windows-10727.exe SHA256</code></p>
      <p>Instead of typing the path to the Daedalus installer executable use drag and drop:</p>
      <ol>
        <li>Press Windows Start Menu </li>
        <li>Type cmd</li>
        <li>You should see cmd.exe in the list of results. Click on cmd.exe to launch it.</li>
        <li>Type or paste: certutil -hashfile </li>
        <li>Press space</li>
        <li>Drag and drop Daedalus installer from Finder to Terminal</li>
        <li>Press space</li>
        <li>Type or paste: SHA256</li>
        <li>Press enter key</li>
      </ol>
      <p>You should see the following output, where string on the second line is the SHA256 checksum:</p>
      <p><code>
          SHA256 hash of file C:\Users\YOUR_USERNAME\Downloads\daedalus-0.12.0-cardano-sl-2.0.0-mainnet-windows-10727.exe:
          {data.sha}
          CertUtil: -hashfile command completed successfully.</code></p>
    </div>
  )