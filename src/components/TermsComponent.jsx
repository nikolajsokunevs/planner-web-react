import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class TermsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.showTerms}>
          <form onSubmit={this.hideTerms} />
          <ModalHeader>Terms and Conditions</ModalHeader>
          {"  "}
          <ModalBody>Hello</ModalBody>
          <ModalFooter>
            <Button onClick={this.props.hideTerms}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TermsComponent;
