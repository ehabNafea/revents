import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import Auxiliary from '../Auxiliary/Auxiliary';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Home/Home';
import EventDashboard from '../../components/EventDashboard/EventDashboard';
import EventDetail from '../../components/EventDashboard/EventDetail/EventDetail';
import PeopleDashboard from '../../components/user/PeopleDashboard/PeopleDashboard';
import UserDetail from '../../components/user/UserDetail/UserDetail';
import Settings from '../../components/Settings/Settings';
import CreateEvent from '../../components/EventDashboard/CreateEvent/CreateEvent';

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <Route path="/" exact component={Home} />
        <Route path='/(.+)' render={() => (
          <Auxiliary>
            <NavBar />
            <Container className="main">
              <Route path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetail} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetail} />
              <Route path="/settings" component={Settings} />
              <Route path="/createEvent" component={CreateEvent} />
            </Container>

          </Auxiliary>
        )} />
      </Auxiliary>

    );
  }

}

export default App;
