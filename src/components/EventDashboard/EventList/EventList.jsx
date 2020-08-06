import React, { Component } from 'react'
import EventListItem from './EventListItem/EventListItem';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class EventList extends Component {
    render() {
        return (
            <Auxiliary>
                {this.props.events.map(event => (
                    <EventListItem 
                    deleteEvent={this.props.deleteEvent}
                    key={event.id} 
                    event={event} 
                    selectEvent={this.props.selectEvent}/>
                ))}
            </Auxiliary>


        )
    }
}

export default EventList;
