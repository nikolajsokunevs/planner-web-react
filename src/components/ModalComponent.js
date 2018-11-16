import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import services from "../api/services"

class ModalComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

    }

    createEvent = () => {
        const date=this.props.clickedDate._d
        const event={title:this.state.event,
            clientName:this.state.clientFirstName,
            clientLastName:this.state.clientLastName,
            cliectPhoneNumber:this.state.phoneNumber,
            master:this.state.master,
            start:date.toISOString().substring(0, 10)+'T'+this.state.startTime,
            end:date.toISOString().substring(0, 10)+'T'+this.state.endTime,
            allDay:false,
        }
        const getAllEvents=this.props.getAllEvents
        services.createEvent(event).then(()=>{
            getAllEvents()
        })

    };

    handleInputChange=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;
        this.setState({
            [id]: value
        });
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
                                    <input id="event" type="text" className="form-control" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Client First Name:</label>
                                    <input id="clientFirstName" type="text" className="form-control" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Client Last Name:</label>
                                    <input id="clienLastName" type="text" className="form-control" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Master:</label>
                                    <input id="master" type="text" className="form-control" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Phone number:</label>
                                    <input id="phoneNumber" type="text" className="form-control" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Start time:</label>
                                    <input id="startTime" type="text" className="form-control" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>End time:</label>
                                    <input id="endTime" type="text" className="form-control" onChange={this.handleInputChange} />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.createEvent}>Submit</Button>
                            <Button color="danger" onClick={this.props.hideModal}>Delete</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;