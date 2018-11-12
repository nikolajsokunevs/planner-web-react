import React from "react";
import services from "../api/services"
import FullCalendar from "fullcalendar-reactwrapper";
import ModalComponent from "./ModalComponent";

class CalendarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            showModalDialog: false
        }

        this.getAllEvents()
    }

    getAllEvents = () => {
        services.getAllEvents().then(result => {
                this.setState({events: result, showModalDialog: false})
            }
        )
    };

    showModal = () => {
        let evenets=this.state.events
        this.setState({ events: evenets,showModalDialog: true });
    };

    hideModal = () => {
        console.log('CALLED')
        let evenets=this.state.events
        this.setState({ events: evenets, showModalDialog: false });
    };

    render() {
        return (
            <div>
                <ModalComponent showModalDialog={this.state.showModalDialog} hideModal={this.hideModal}/>
                <div id="calendar">
                    <FullCalendar
                        id="your-custom-ID"
                        header={{
                            left: "prev,next today myCustomButton",
                            center: "title",
                            right: "month,basicDay"
                        }}
                        navLinks={true}
                        editable={true}
                        eventLimit={true}
                        events={this.state.events}
                        dayClick={()=>this.showModal()}
                    />
                </div>
            </div>
        );
    }
}

export default CalendarComponent;