import React from 'react';
import { Grid } from 'semantic-ui-react'
import { Switch, Route, Redirect } from 'react-router-dom'

import SettingNav from './SettingNav/SettingNav'
import BasicSetting from './BasicSetting/BasicSetting';
import AboutSetting from './AboutSetting/AboutSetting';
import PhotoSetting from './PhotoSetting/PhotoSetting';
import AcountSetting from './AcountSetting/AcountSetting';

const Settings = () => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic' />
                    <Route path='/settings/basic' component={BasicSetting} />
                    <Route path='/settings/about' component={AboutSetting} />
                    <Route path='/settings/photo' component={PhotoSetting} />
                    <Route path='/settings/acount' component={AcountSetting} />
                </Switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingNav />
            </Grid.Column>
        </Grid>
    )
}

export default Settings
