import React from 'react'
export default () => 
  (
    <div className='content'>
      <h3 id="macos">macOS</h3>
      <ol>
        <li>
          <p>Obtain both the Daedalus installer .pkg file, and its corresponding .pkg.asc signature file -- put them in the
            same directory. </p>
        </li>
        <li>
          <p>If you already have the GPG Suite installed, and a personal key generated, please skip to step 5, and if not,
            proceed with the next step. </p>
        </li>
        <li>
          <p>Go to <a href="https://gpgtools.org">https://gpgtools.org</a>, head to the GPG Suite section, download the
            .dmg file and install it: </p>
          <ul>
            <li>Right-click the .dmg file, then Open, which will open a new window with two icons: Install and Uninstall
            </li>
            <li>Right-click the Install icon, and choose Open with.. -&gt; Installer, which should start the GPG Suite
              installer </li>
            <li>Follow through the installation wizard </li>
          </ul>
        </li>
        <li>
          <p>Once GPG Suite installation completes, it will ask you to create a new key pair (this is required for step 6,
            so please don’t skip it): </p>
          <ul>
            <li>Enter a name and an email that suit you personally. </li>
            <li>Choose a passphrase to protect your personal key (NOTE: the passphrase can be empty, but it is not
              recommended if you intend to use this key and GPG Suite in future). </li>
          </ul>
        </li>
        <li>
          <p>Import the IOHK key using the GPG Keychain application: </p>
          <ul>
            <li>
              <p>Select Key -&gt; Lookup Key on Key Server in the application menu </p>
            </li>
            <li>
              <p>Search for signing.authority@iohk.io </p>
            </li>
            <li>
              <p>Choose the key with fingerprint CBFAA9BA with the user ID “IOHK Signing Authority
                &lt;signing.authority@iohk.io&gt;”, then click Retrieve Key </p>
            </li>
            <li>
              <p>Verify (right-click the imported key, then Details) that the fingerprint of the imported key is D325 87D4
                090F E461 CAEE 0FF4 966E 5CB9 CBFA A9BA </p>
            </li>
            <li>
              <p>if it's not, the wrong key was imported, right click and delete </p>
            </li>
            <li>
              <p>if it is, we are good to proceed with the next step. </p>
            </li>
          </ul>
        </li>
        <li>
          <p>Sign the imported IOHK key (this designates trust and is required for the next step): </p>
          <ul>
            <li>Right-click on the imported IOHK key, then “Sign”. </li>
          </ul>
        </li>
        <li>Verify the installer binary:

          <ul>
            <li>Right-click the Daedalus installer (.pkg file) in Finder (do NOT right click on the .asc file, that will
              not work), then select Services -&gt; OpenPGP: Verify Signature of File (the .asc signature file must reside
              in the same directory) </li>
            <li>The Verification Results dialog will then appear with the verdict in the Result column: <ol>
                <li>“Signed by: IOHK Signing Authority &lt;signing.authority@iohk.io&gt; 1471941A -- full trust” -- if
                  successful </li>
                <li>..anything else means there was no valid signature for the installer.</li>
              </ol>
              <p></p>
            </li>
          </ul>
          <p></p>
          <p></p>
        </li>
      </ol>
      <p></p>
    </div>
  )