import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import services from "../api/services";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      mandatoryField: ['title', 'start','end','cliectPhoneNumber'],
      titleValid: true,
      titleClass: 'form-control',
      startValid: true,
      endValid: true,
      cliectPhoneNumberValid: true,
      formVaild: false
    };
  }

  validateField(fieldName) {
    let validationPassed = false;
    const value=this.state.event[fieldName]
    let fieldValidationErrors = this.state.formErrors;

    switch (fieldName) {
      case "title":
        this.state.titleValid = value.length > 0 ? true : false;
        fieldValidationErrors.title = this.state.titleValid ? '' : ' is mandatory field';
        break;
      case "start":
        this.state.startValid = value.length > 11 ? true : false;
        break;
      case "end":
        this.state.endValid = value.length > 11 ? true : false;
        break;
      case "cliectPhoneNumber":
        this.state.cliectPhoneNumberValid = value.length > 0 ? true : false;
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors})
  }


  validateMandatoryFields(){
    for (let i=0;i<this.state.mandatoryField.length;i++){
      const fieldName=this.state.mandatoryField[i]
      const fieldValue=this.state.event[fieldName];
            console.log(fieldName)
                  console.log(fieldValue)
      if (fieldValue!==undefined&&fieldValue.length>0){
      console.log(fieldValue, "TRUE", fieldValue, fieldValue.length)

      }else{
              console.log(fieldValue, "false")
        this.setState({[fieldName+'Valid']:false})
      }
    }
    console.log(this.state);
  }

  createEvent = () => {
    this.validateMandatoryFields()
    const getAllEvents = this.props.getAllEvents;
    //    services.createEvent(this.state.event).then((result) => {
    //        console.log(result)
    //        getAllEvents()
    //    })
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.state.event[name] =
      (name === "start" || name === "end")
        ? this.props.clickedDate._d.toISOString().substring(0, 10) + "T" + value
        : value;
    this.setState({[name+'Valid']:true})
  };

  errorClass(error) {
   return(error === true ? '' : 'is-invalid');
 }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.showModalDialog}>
          <form onSubmit={this.hideModal}>
            <ModalHeader> Create new event </ModalHeader>{" "}
            <ModalBody>
              <div className="row">
                <div className="form-group col-md-4">
                  <label> Event: </label>{" "}
                  <input
                    name="title"
                    type="text"
                    className={`form-control ${this.errorClass(this.state.titleValid)}`}
                    onBlur={this.handleInputChange}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="row">
                <div className="form-group col-md-4">
                  <label> Client First Name: </label>{" "}
                  <input
                    name="clientName"
                    type="text"
                    className="form-control"
                    onBlur={this.handleInputChange}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="row">
                <div className="form-group col-md-4">
                  <label> Client Last Name: </label>{" "}
                  <input
                    name="clientLastName"
                    type="text"
                    className="form-control"
                    onBlur={this.handleInputChange}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="row">
                <div className="form-group col-md-4">
                  <label> Master: </label>{" "}
                  <input
                    name="master"
                    type="text"
                    className="form-control"
                    onBlur={this.handleInputChange}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="row">
                <div className="form-group col-md-4">
                  <label> Phone number: </label>{" "}
                  <input
                    name="cliectPhoneNumber"
                    type="text"
                    className={`form-control ${this.errorClass(this.state.cliectPhoneNumberValid)}`}
                    onBlur={this.handleInputChange}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="row">
                <div className="form-group col-md-4">
                  <label> Start time: </label>{" "}
                  <input
                    name="start"
                    type="text"
                    className={`form-control ${this.errorClass(this.state.startValid)}`}
                    onBlur={this.handleInputChange}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="row">
                <div className="form-group col-md-4">
                  <label> End time: </label>{" "}
                  <input
                    name="end"
                    type="text"
                    className={`form-control ${this.errorClass(this.state.endValid)}`}
                    onBlur={this.handleInputChange}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </ModalBody>{" "}
            <ModalFooter>
              <Button color="success" onClick={this.createEvent}>
                Submit{" "}
              </Button>{" "}
              <Button color="danger" onClick={this.props.hideModal}>
                Cancel{" "}
              </Button>{" "}
            </ModalFooter>{" "}
          </form>{" "}
        </Modal>{" "}
      </div>
    );
  }
}

export default ModalComponent;
