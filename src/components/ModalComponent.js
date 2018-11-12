import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import services from "../api/services"

class ModalComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    createEvent = (event) => {
        services.createEvent(event).then(result => {
            console.log(result)
            this.props.getAllEvents()
            }
        )

    };

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
                            <Button color="success" onClick={({})=>this.createEvent(event)}>Submit</Button>
                            <Button color="danger" onClick={this.props.hideModal}>Delete</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;