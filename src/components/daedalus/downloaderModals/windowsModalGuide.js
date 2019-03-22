import React from 'react'
export default () =>
  (
    <div className='content'>
      <h3 id="windows">Windows</h3>
      <ol>
        <li>
          <p>Obtain both the Daedalus installer .exe file, and its corresponding .exe.asc signature file -- put them in the
            same directory. </p>
        </li>
        <li>
          <p>Obtain the GNUPG package from <a href="https://www.gpg4win.org/">https://www.gpg4win.org/</a> </p>
        </li>
        <li>
          <p>Proceed with installation and launch the Kleopatra component.</p>
        </li>
        <li>
          <p>Unless you already have a personal GPG key, you will have to create one (which is required for step 6): </p>
          <ol>
            <li>Select the menu item File -&gt; New keypair -&gt; Create a personal OpenPGP key pair </li>
            <li>Enter a name and an email address that suit you personally. </li>
            <li>Choose a passphrase to protect your personal key (NOTE: the passphrase can be empty, but it is not
              recommended if you intend to use GNUPG in future). </li>
          </ol>
        </li>
        <li>Import the IOHK key:

          <ol>
            <li>File -&gt; Lookup on Server </li>
            <li>Allow network access to 'dirmngr', if the prompt arises </li>
            <li>Search for signing.authority@iohk.io </li>
            <li>Import the key </li>
            <li>Do not certify the key just yet </li>
            <li>Right-click on the key, and choose "Details" </li>
            <li>Ensure that the fingerprint is D32587D4090FE461CAEE0FF4966E5CB9CBFAA9BA </li>
          </ol>

        </li>
      </ol>
      <ul>
        <li>if it's not, the wrong key was imported, right click and delete </li>
        <li>if it is, we are good to go </li>
      </ul>
      <ol>
        <li>
          <p>Certify the IOHK key (this designates trust and is required for the next step): </p>
          <ol>
            <li>Once you have a personal GPG key, right-click on the imported IOHK key and choose Certify </li>
            <li>Enable the IOHK user ID </li>
            <li>Tick the I have verified the fingerprint checkbox (since you did, as per step 5), and proceed. </li>
            <li>You should receive a message saying Certification successful </li>
          </ol>
        </li>
        <li>
          <p>Verify the installer binary: </p>
          <ol>
            <li>
              <p>Click the Decrypt/Verify button on the Kleopatra toolbar </p>
            </li>
            <li>
              <p>Choose the Daedalus installer .exe file in the file dialog (the .asc signature file must reside in the
                same directory) </p>
            </li>
            <li>
              <p>If the verification is successful, you will receive a green-tinted message box saying: </p>
              <ul>
                <li>Valid signature by signing.authority@iohk.io </li>
                <li>Date of signature </li>
                <li>With certificate D325 87D4 090F E461 CAEE 0FF4 966E 5CB9 CBFA A9BA </li>
              </ul>
            </li>
            <li>
              <p>Anything else would constitute a signature verification failure.</p>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  )