import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import Plus from "../img/plus.svg";
class Mod extends Component{
	render(){
		const {showModal,open,close,value,onChange,onKeyUp,onClick3 }=this.props;
		return(
<div className="Mod">
<img src={Plus} width="54" height="54" onClick={open} />

     <Modal size="lg"  centered show={showModal} onHide={close}>
    <Modal.Header closeButton>
        <Modal.Title><h2>What needs to be done?</h2></Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <input type="text" value={value} onChange={onChange} onKeyUp={onKeyUp}  placeholder="What needs to be done?"/>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="success" onClick={onClick3}  >Accept</Button>
    </Modal.Footer>
</Modal>
</div>
			)
	}
}
export default Mod