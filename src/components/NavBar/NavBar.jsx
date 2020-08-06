import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';

import SignOutMenu from './menus/SignOutMenu/SignOutMenu';
import SignInMenu from './menus/SignInMenu/SignInMenu';

class NavBar extends Component {
    state = {
        auth: false
    }

    signInHandler = () => this.setState({auth: true});
    signOutHandler = () => {
        this.setState({auth: false});
        this.props.history.push('/')
    };
    render() {
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} exact to="/" header>
                        <img src="assets/images/logo.png" alt="logo" />
                        Re-vents
                      </Menu.Item>
                    <Menu.Item as={NavLink} to="/events" name="Events"  />
                    <Menu.Item as={NavLink} to="/people" name="People"  />
                    <Menu.Item>
                        <Button 
                        as={Link}
                        to="/createEvent"
                        floated="right" 
                        positive inverted 
                        content="Create Event" />
                    </Menu.Item>
                    {this.state.auth ? <SignInMenu signOut={this.signOutHandler} /> : <SignOutMenu signIn={this.signInHandler} />}
                    
                </Container>
            </Menu>
        )
    }
}

export default withRouter(NavBar);
