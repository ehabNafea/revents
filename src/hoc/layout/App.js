import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import NavBar from '../../components/NavBar/NavBar';
import EventDashboard from '../../components/EventDashboard/EventDashboard';
import Auxiliary from '../Auxiliary/Auxiliary';

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <NavBar />

        <Container className="main">
          <EventDashboard />
        </Container>

      </Auxiliary>

    );
  }

}

export default App;
