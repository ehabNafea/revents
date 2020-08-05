import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';

import EventList from './EventList/EventList';
import CreateEvent from './CreateEvent/CreateEvent';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


 class EventDashboard extends Component {
   state = {
     events: eventsFromDashboard,
     isOpen: false,
     selectEvent: null
   }

   openFormHandler = () => {
     this.setState({
       isOpen: true,
       selectEvent: null
     })
   }
   cancelFormHandler = () => {
    this.setState({
      isOpen: false
    })
  }

   createNewEventHandler = (newEvent) => {
      newEvent.id = cuid();
      newEvent.hostPhotoURL = 'assets/images/user.png';
      this.setState({
        events: [...eventsFromDashboard, newEvent],
        isOpen: false
      });
   }
      selectEventHandler = (event) => {
        this.setState({
          selectEvent: event,
          isOpen: true
        });
      }
    render() {
      const {events, isOpen, selectEvent} = this.state;
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} selectEvent={this.selectEventHandler} />
                </Grid.Column>
                <Grid.Column width={6}>
                <Button onClick={this.openFormHandler} positive inverted content="Create Event" />
                  {isOpen ? 
                  <CreateEvent 
                      key={selectEvent ? selectEvent.id : 0}
                      selectEvent={selectEvent}
                      cancelForm={this.cancelFormHandler}  
                      creatNewEvent={this.createNewEventHandler} /> : null}    
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard;
