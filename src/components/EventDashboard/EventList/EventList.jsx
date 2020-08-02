import React, { Component } from 'react'
import EventListItem from './EventListItem/EventListItem';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class EventList extends Component {
    render() {
        return (
            <Auxiliary>
                {this.props.events.map(event => (
                    <EventListItem key={event.id} event={event}/>
                ))}
            </Auxiliary>


        )
    }
}

export default EventList;
