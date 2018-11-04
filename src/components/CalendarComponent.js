import React from 'react';
import ReactDOM from 'react-dom';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';

class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events:[
                {
                    title: 'All Day Event',
                    start: '2018-05-01'
                }
            ],
    }
  }

  render() {
    return (
      <div id="calendar">
        <FullCalendar
             id = "your-custom-ID"
         header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicDay'
        }}
        navLinks= {true} // can click day/week names to navigate views
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        events = {this.state.events}
    />
      </div>
    );
  }
}

export default CalendarComponent;
