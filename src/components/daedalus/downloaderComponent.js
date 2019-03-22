import React, { Component } from 'react'
import axios from 'axios'

import Modal from './modal'

import Button from './button'

import Linux from '../../assets/images/icon-lin.svg'
import Windows from '../../assets/images/icon-win.svg'
import Apple from '../../assets/images/icon-mac.svg'

  const API = 'https://s3-ap-northeast-1.amazonaws.com/update.cardano-mainnet.iohk.io/daedalus-latest-version.json?date='

  const TimeStamp = Math.floor(Date.now() / 1000)

  //const target = document.getElementById('downloaders')

  class CardanoDownLoaders extends Component {
    constructor(props) {
      super(props);
      this.state = {
        result: null,
        isLoading: false,
        error: null,
      }
    }

    getResults() {
      axios.get(API + TimeStamp)
        .then(result => this.setState({
          result: result.data,
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
    }

    downloadString(e, text, fileType, fileName) {
      e.preventDefault()
      var blob = new Blob([text], { type: fileType });
      var a = document.createElement('a');
      a.download = fileName;
      a.href = URL.createObjectURL(blob);
      a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
    }
  
    componentDidMount() {
      this.setState({ isLoading: true })
      this.getResults()
    }
  
    render() {
      return (
        <section className="inline-block mt-3 mb-5 pt-3 pb-5" id="downloadSection">
          <div className="container text-center">
            <h3 className="text-uppercase mt-4 mb-4">Download</h3>
            <p>Download the latest version of Daedalus for your preferred OS.</p>
              <div className="row justify-content-center">
                <div className="col-md-18">
                    {
                      this.state.isLoading ? 
                      <ul style={{opacity:0.5}}>
                        <li><a href="/">Windows <span className='glyphicon glyphicon-repeat fast-right-spinner pos-static' /></a></li>
                        <li><a href="/">Mac OS <span className='glyphicon glyphicon-repeat fast-right-spinner pos-static' /></a></li>
                        <li><a href="/">Linux <span className='glyphicon glyphicon-repeat fast-right-spinner pos-static' /></a></li>
                      </ul>
                      :
                      <ul className="download-list">
                        <div className="row">

                          <li className="col-md-8">
                            <div>
                                <img className="d-inline m-2" src={Windows} alt='windows os'/>
                                <h3 className="">Windows 64 bit</h3>
                                <span className='version'>Version: {this.state.result && this.state.result.platforms.windows.version}</span>
                                <div className="text-center mt-2 mb-4">
                                  <a href={this.state.result && this.state.result.platforms.windows.URL}>
                                    <Button type="primary" text="Download Daedalus"></Button>
                                  </a>
                                </div>
                            </div>
                            <div className="mb-2">
                              <div className="mt-2 mb-2">
                                <p className="mb-1">PGP signature</p>
                                <a href='/' className='trans-bottom-m cursor-p margin-auto' onClick={e => this.downloadString(e, `${this.state.result && this.state.result.platforms.windows.signature}`, `text/txt`, `win-pgp.txt`)}>
                                  <Button type="secondary" text="Download"></Button>
                                </a>
                              </div>
                              <Modal type='link' text='Verify Signature' classes='text-uppercase trans-bottom-m inline text-color-white cursor-p subtle-link margin-auto' dataOs='windows'/>
                            </div>
                            <div className="mt-2">
                              <label className="mb-0" htmlFor='sha256-win'>SHA256 checksum
                                <textarea id='sha256-win' type="text" defaultValue={this.state.result && this.state.result.platforms.windows.SHA256} spellCheck="false"></textarea>
                              </label>
                              <Modal type='link' text='Verify Checksum' classes='text-uppercase trans-bottom-m inline text-color-white cursor-p subtle-link margin-auto' dataOs='windows' dataCs='windowsCS' dataSha256={this.state.result && this.state.result.platforms.windows.SHA256} />
                            </div>
                          </li>

                          <li className="col-md-8">
                            <div>
                             <img className="d-inline m-2" src={Apple} alt='mac os'/>
                                <h3 className="">macOS 64 bit</h3>
                                <span className='version'>Version: {this.state.result && this.state.result.platforms.darwin.version}</span>
                                <div className="text-center mt-2 mb-4">
                                  <a href={this.state.result && this.state.result.platforms.darwin.URL}>
                                    <Button type="primary" text="Download Daedalus"></Button>
                                  </a>
                                </div>
                            </div>
                            <div className="mb-2">
                               <div className="mt-2 mb-2">
                                <p className="mb-1">PGP signature</p>
                                <a href='/' className='trans-bottom-m cursor-p margin-auto' onClick={e => this.downloadString(e, `${this.state.result && this.state.result.platforms.darwin.signature}`, `text/txt`, `mac-pgp.txt`)}>
                                  <Button type="secondary" text="Download"></Button>
                                </a>
                              </div>

                              <Modal type='link' text='Verify Signature' classes='text-uppercase trans-bottom-m inline text-color-white cursor-p subtle-link margin-auto' dataOs='darwin' />
                            </div>
                            <div>
                              <label className="mb-0" htmlFor='sha256-mac'>SHA256 checksum
                                <textarea id='sha256-mac' type="text" defaultValue={this.state.result && this.state.result.platforms.darwin.SHA256} spellCheck="false"></textarea>
                              </label>

                              <Modal type='link' text='Verify Checksum' classes='text-uppercase trans-bottom-m inline text-color-white cursor-p subtle-link margin-auto' dataOs='darwin' dataCs='darwinCS' dataSha256={this.state.result && this.state.result.platforms.darwin.SHA256} />
                            </div>
                          </li>

                          <li className="col-md-8">
                            <div>
                              <img className="d-inline m-2" src={Linux} alt='linux os'/>
                              <h3 className="">Linux 64 bit</h3>
                              <span className='version'>Version: {this.state.result && this.state.result.platforms.linux.version}</span>
                              <div className="text-center mt-2 mb-4">
                                <a href={this.state.result && this.state.result.platforms.linux.URL} className='trans-bottom-m margin-auto'>
                                  <Button type="primary" text="Download Daedalus"></Button>
                                </a>
                              </div>
                            </div>
                            <div className="mb-2">
                              <div className="mt-2 mb-2">
                                <p className="mb-1">PGP signature</p>
                                <a href='/' className='trans-bottom-m cursor-p margin-auto' onClick={e => this.downloadString(e, `${this.state.result && this.state.result.platforms.linux.signature}`, `text/txt`, `linux-pgp.txt`)} >
                                  <Button type="secondary" text="Download"></Button>
                                </a>
                              </div>

                              <Modal type='link' text='Verify Signature' classes='text-uppercase trans-bottom-m inline text-color-white cursor-p subtle-link margin-auto' dataOs='linux'  />
                            </div>
                            <div>
                              <label className="mb-0" htmlFor='sha256-linux'>SHA256 checksum
                                <textarea id='sha256-linux' type="text" defaultValue={this.state.result && this.state.result.platforms.linux.SHA256} spellCheck="false"></textarea>
                              </label>

                              <Modal type='link' text='Verify Checksum' classes='text-uppercase trans-bottom-m inline text-color-white cursor-p subtle-link margin-auto' dataOs='linux' dataCs='linuxCS' dataSha256={this.state.result && this.state.result.platforms.linux.SHA256} />
                            </div>
                          </li>

                          </div>
                      </ul>
                    }
                </div>
              </div>
            </div>
        </section>
      )
    }
  }

export default CardanoDownLoaders