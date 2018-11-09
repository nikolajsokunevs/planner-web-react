import React from "react";
import ReactDOM from "react-dom";
import {GET} from "../api/utils/";
import services from "../api/services"

import FullCalendar from "fullcalendar-reactwrapper";

class CalendarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            events: []
        }

        services.getAllEvents().then(result => {
                this.setState({events:result})
            }
        )
    }

    render() {
        return (
            <div>
                <div id="calendar">
                    <FullCalendar
                        id="your-custom-ID"
                        header={{
                            left: "prev,next today myCustomButton",
                            center: "title",
                            right: "month,basicDay"
                        }}
                        navLinks={true} // can click day/week names to navigate views
                        editable={true}
                        eventLimit={true} // allow "more" link when too many events
                        events={this.state.events}
                    />
                </div>
            </div>
        );
    }
}

export default CalendarComponent;
