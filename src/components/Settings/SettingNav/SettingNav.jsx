import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const SettingNav = () => {
    return (
        <Auxiliary>
            <Menu vertical>
                <Header icon="user" attached inverted color="grey" content="Profile" />
                <Menu.Item as={NavLink} to='/settings/basic'>Basics</Menu.Item>
                <Menu.Item as={NavLink} to='/settings/about'>About Me</Menu.Item>
                <Menu.Item as={NavLink} to='/settings/photo'>My Photos</Menu.Item>
            </Menu>
            <Menu vertical>
                <Header
                    icon="settings"
                    attached
                    inverted
                    color="grey"
                    content="Account"
                />
                <Menu.Item as={NavLink} to='/settings/acount'>My Account</Menu.Item>
            </Menu>
        </Auxiliary>


    )
}

export default SettingNav;