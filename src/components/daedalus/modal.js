
import React from 'react';
import { Button, 
  Modal, 
  ModalHeader, 
  ModalBody } from 'reactstrap';

import { WindowsGuide,
  MacGuide,
  LinuxGuide,
  WindowsChecksumGuide,
  MacChecksumGuide,
  LinuxChecksumGuide } from './downloaderModals'

let data

class ModalWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: ''
    };

    this.toggle = this.toggle.bind(this);
    this.buildDataFromProps = this.buildDataFromProps.bind(this);
    //this.modalImageTemplate = this.modalImageTemplate.bind(this);
    //his.templateSwitcher = this.templateSwitcher.bind(this);
  }

  modalImageTemplate = (props) => {
    return `
      <img class="${props.size} image-expand" src="${props.img}" style="display:block; margin: 0 auto;" />
    `
  }

  templateSwitcher = (d) => {
    switch(true) {
      case (d.dataOs === 'windows' && !d.dataCs) :
        return <WindowsGuide/>
      case (d.dataOs === 'darwin' && !d.dataCs) :
        return <MacGuide/>
      case (d.dataOs === 'linux' && !d.dataCs) :
        return <LinuxGuide/>
      case (d.dataOs === 'windows' && d.dataCs === 'windowsCS') :
        return <WindowsChecksumGuide sha={d.dataSha256}/>
        case (d.dataOs === 'darwin' && d.dataCs === 'darwinCS') :
        return <MacChecksumGuide sha={d.dataSha256}/>
      case (d.dataOs === 'linux' && d.dataCs === 'linuxCS') :
        return <LinuxChecksumGuide sha={d.dataSha256}/>
      default :
        return `<p>There has been an error, please reload the page.</p>`
    }
  }

  buildDataFromProps(props) {
    data = {
      dataOs: props.dataOs,
      dataCs: props.dataCs,
      dataImage: props.dataImage,
      dataSha256: props.dataSha256,
      img: props.img,
      size: props.size
    }
    return data
  }

  toggle(e) {
    e.preventDefault()
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const props = this.props
    this.buildDataFromProps(props)
    return (
      <div className='modalComponent'>
        {
          props.type === 'link' 
          ?
          <a href='/' onClick={this.toggle} className={props.classes}>{props.text}</a>
          :
          <Button onClick={this.toggle}>{this.props.buttonLabel}</Button>
        }
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            {
              props.dataImage 
                ?
                  this.modalImageTemplate(data)
                :
                  this.templateSwitcher(data)
            }
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalWrap;