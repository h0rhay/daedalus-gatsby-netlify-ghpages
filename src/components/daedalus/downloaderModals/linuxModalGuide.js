import React from 'react'
export default () => 
  (
  <div className='content'>
    <h3 id='linux'>Linux</h3>
    <ol>
      <li>
        <p>Obtain both the Daedalus installer .bin file, and its corresponding .bin.asc signature file -- put them in the
          same directory. </p>
      </li>
      <li>
        <p>Ensure that the gpg2 command is available (assuming Ubuntu Linux) in your shell, and if not -- execute the
          following shell command (shell commands further indicated by this bold monospace font): </p>
        <ul>
          <li>apt-get install gnupg2 </li>
        </ul>
      </li>
      <li>
        <p>Unless you already have a personal GPG key, create one (this is required for step 5): </p>
        <ul>
          <li>gpg2 --generate-key </li>
          <li>Supply an user ID (real name and email) that suit you personally </li>
          <li>Choose a passphrase to protect your personal key (NOTE: the passphrase can be empty, but it is not
            recommended if you intend to use this key and GNUPG in future) </li>
        </ul>
      </li>
      <li>
        <p>Import the IOHK key: </p>
        <ul>
          <li>gpg2 --keyserver hkp://pool.sks-keyservers.net --search-keys signing.authority@iohk.io </li>
          <li>In the selection dialogue, choose the key with fingerprint 966E5CB9CBFAA9BA </li>
        </ul>
      </li>
      <li>
        <p>Sign the IOHK key (this designates trust and is required for the next step): </p>
        <ul>
          <li>gpg2 --lsign D32587D4090FE461CAEE0FF4966E5CB9CBFAA9BA </li>
        </ul>
      </li>
      <li>Verify the installer binary using the .asc signature (the .asc signature file must reside in the same directory
        as the installer binary):
        <ul>
          <li>gpg2 --verify daedalus-VERSION-cardano-sl-VERSION-mainnet-linux.bin.pkg.asc </li>
          <li>Successful verification should produce a message like follows: </li>
        </ul>
      </li>
    </ol>
    <code>gpg: assuming signed data in daedalus-VERSION-cardano-sl-VERSION-mainnet-linux.bin.pkggpg: Signature made
    ...DATE...gpg: using RSA key 9F9840B50AE539A2732CF646C131557F1471941Agpg: checking the trustdbgpg: marginals
    needed: 3 completes needed: 1 trust model: pgpgpg: depth: 0 valid: 1 signed: 1 trust: 0-, 0q, 0n, 0m, 0f, 1ugpg:
    depth: 1 valid: 1 signed: 0 trust: 1-, 0q, 0n, 0m, 0f, 0ugpg: next trustdb check due at ...DATE...gpg: Good
    signature from {`IOHK Signing Authority <signing.authority@iohk.io>`}</code>
  </div>
  )