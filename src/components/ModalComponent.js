import React from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import services from "../api/services";
import {validateField, validateFields, validation} from "../utils/validation";

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {},
            fields: {
                title: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                start: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                end: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                clientPhoneNumber: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                clientName: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                clientLastName: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                master: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
            }
        }
    }

    createEvent = () => {
        const fields = this.state.fields
        this.setState({fields: validateFields(fields)})
        const getAllEvents = this.props.getAllEvents;
        //    services.createEvent(this.state.event).then((result) => {
        //        console.log(result)
        //        getAllEvents()
        //    })
    };

    errorClass(error) {
        return (error === true ? '' : 'is-invalid');
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        let fields = this.state.fields
        fields[name].value = target.type === "checkbox" ? target.checked : target.value;
        validateField(fields[name])
        this.setState({fields: fields})
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.props.showModalDialog}>
                    <form onSubmit={this.hideModal}>
                        <ModalHeader>Create new event </ModalHeader>{" "}
                        <ModalBody>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label> Event: </label>{" "}
                                    <input
                                        name="title"
                                        type="text"
                                        className={`form-control ${this.errorClass(this.state.fields.title.valid)}`}
                                        onChange={this.handleInputChange}
                                        value={this.state.fields.title.value}
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a title.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label> Client First Name: </label>{" "}
                                    <input
                                        name="clientName"
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.fields.clientName.value}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label> Client Last Name: </label>{" "}
                                    <input
                                        name="clientLastName"
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.fields.clientLastName.value}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Master: </label>{" "}
                                    <input
                                        name="master"
                                        type="text"
                                        className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.fields.master.value}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Phone number: </label>{" "}
                                    <input
                                        name="clientPhoneNumber"
                                        type="text"
                                        className={`form-control ${this.errorClass(this.state.fields.clientPhoneNumber.valid)}`}
                                        onChange={this.handleInputChange}
                                        value={this.state.fields.clientPhoneNumber.value}
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a client phone number.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label> Start time: </label>{" "}
                                    <input
                                        name="start"
                                        type="text"
                                        className={`form-control ${this.errorClass(this.state.fields.start.valid)}`}
                                        onChange={this.handleInputChange}
                                        value={this.state.fields.start.value}
                                    />
                                    <div className="invalid-feedback">
                                    Please provide a start date.
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label> End time: </label>{" "}
                                    <input
                                        name="end"
                                        type="text"
                                        className={`form-control ${this.errorClass(this.state.fields.end.valid)}`}
                                        onChange={this.handleInputChange}
                                        value={this.state.fields.end.value}
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a end date.
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.createEvent}>
                                Submit
                            </Button>
                            <Button color="danger" onClick={this.props.hideModal}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent;
