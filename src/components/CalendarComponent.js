import React from "react";
import services from "../api/services"
import FullCalendar from "fullcalendar-reactwrapper";
import ModalComponent from "./ModalComponent";

class CalendarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            showModalDialog: false,
            clickedDate:null
        }

        this.getAllEvents()
    }

    getAllEvents = () => {
        services.getAllEvents().then(result => {
           //     this.setState({events: result, showModalDialog: false})
            }
        )
    };

    showModal = (date) => {
        const events=this.state.events
        this.setState({ events: events,showModalDialog: true, clickedDate:date });
    };

    hideModal = () => {
        const evenets=this.state.events
        this.setState({ events: evenets, showModalDialog: false });
    };

    render() {
        return (
            <div>
                <ModalComponent showModalDialog={this.state.showModalDialog} hideModal={this.hideModal} getAllEvents={this.getAllEvents} clickedDate={this.state.clickedDate}/>
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
                        dayClick={(date)=>this.showModal(date)}
                    />
                </div>
            </div>
        );
    }
}

export default CalendarComponent;