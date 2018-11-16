import React from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import services from "../api/services"

class ModalComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            event: {},
            titleValid: false,
            startValid: false,
            endValid: false,
            cliectPhoneNumber: false,
            formVaild: false
        };
    }

    validateField(fieldName, value){
        let validationPassed=false;

        switch(fieldName) {
            case 'titleValid':
                validationPassed = value.length>0?true:false
                break;
            case 'startValid':
                validationPassed = value.length>0?true:false
                break;
            case 'endValid':
                validationPassed = value.length>0?true:false
                break
            case 'cliectPhoneNumber':
                validationPassed = value.length>0?true:false
                break
            default:
                break;
        }
        this.setState(this.state[fieldName+'Valid']=validationPassed);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    createEvent = () => {
        console.log(this.state.event)
        const getAllEvents = this.props.getAllEvents
    //    services.createEvent(this.state.event).then((result) => {
    //        console.log(result)
    //        getAllEvents()
    //    })

    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        (name === 'start' || name === 'end') ? (this.state.event[name] = this.props.clickedDate._d.toISOString().substring(0, 10) + 'T' + value) :
            (this.state.event[name] = value)
   
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
                                    <input name="title" type="text" className="form-control"
                                           onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Client First Name:</label>
                                    <input name="clientName" type="text" className="form-control"
                                           onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Client Last Name:</label>
                                    <input name="clientLastName" type="text" className="form-control"
                                           onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Master:</label>
                                    <input name="master" type="text" className="form-control"
                                           onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Phone number:</label>
                                    <input name="cliectPhoneNumber" type="text" className="form-control"
                                           onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>Start time:</label>
                                    <input name="start" type="text" className="form-control"
                                           onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label>End time:</label>
                                    <input name="end" type="text" className="form-control"
                                           onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.createEvent}>Submit</Button>
                            <Button color="danger" onClick={this.props.hideModal}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;