import React from "react";
import ReactDOM from "react-dom";
import {GET} from "../api/utils/";
import services from "../api/services"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.showModalDialog}>
                    <form onSubmit={this.hideModal}>
                        <ModalHeader>Create new event</ModalHeader>
                        <ModalBody>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Event:</label>
                                    <input id="event" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Client Name:</label>
                                    <input id="clientName" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Phone number:</label>
                                    <input id="phoneNumber" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Start time:</label>
                                    <input id="startTime" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>End time:</label>
                                    <input id="endTime" type="text" className="form-control" />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.props.hideModal}>Submit</Button>
                            <Button color="danger" onClick={this.props.hideModal}>Delete</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;