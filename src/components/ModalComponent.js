import React from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {validateField, validateFields, validation} from "../utils/validation";
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState=()=>{
        const initialState={
            event: {},
            fields: {
                title: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                start: {value: moment(), mandatory: true, valid: true, validationType: validation.TIME},
                end: {value: moment(), mandatory: true, valid: true, validationType: validation.TIME},
                clientPhoneNumber: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                clientName: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                clientLastName: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
                master: {value: '', mandatory: true, valid: true, validationType: validation.NOT_EMPTY},
            }
        }
        return initialState;
    }

    createEvent = () => {
        const fields = this.state.fields
        this.setState({fields: validateFields(fields)})
       // const getAllEvents = this.props.getAllEvents;
        //    services.createEvent(this.state.event).then((result) => {
        //        console.log(result)
        //        getAllEvents()
        //    })
        //        this.setState(this.getInitialState())
    };

    reset = () => {
        this.setState(this.getInitialState())
        this.props.hideModal()
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

    startTimeChange = value => {
        let fields = this.state.fields
        fields.start.value = value;
        if(value>fields.end.value){
            this.endTimeChange(value)
        }
        validateField(fields.start)
        this.setState({fields: fields})
    }

    endTimeChange = value => {
        let fields = this.state.fields
        fields.end.value = value;
        validateField(fields.end)
        this.setState({fields: fields})
    }

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
                                <div className="form-group col-md-8">
                                    <label> Start time: </label>{" "}
                                    <TimePicker
                                        name="startTime"
                                        defaultValue={this.state.fields.start.value}
                                        showSecond={false}
                                        className="xxx"
                                        format={'h:mm a'}
                                        use12Hours
                                        inputReadOnly
                                        onChange={this.startTimeChange}
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a start date.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-8">
                                    <label> End time: </label>{" "}
                                    <TimePicker
                                        name="endTime"
                                        value={this.state.fields.end.value}
                                        showSecond={false}
                                        className="xxx"
                                        format={'h:mm a'}
                                        use12Hours
                                        inputReadOnly
                                        onChange={this.endTimeChange}
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
                            <Button color="danger" onClick={this.reset}>
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
