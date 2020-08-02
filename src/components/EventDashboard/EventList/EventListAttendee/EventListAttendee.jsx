import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image src={this.props.attendee.photoURL} size="mini" as="a" circular />
            </List.Item>
        )
    }
}

export default EventListAttendee;
