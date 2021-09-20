import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { SignInView } from '../view/signinview/SignInView'
import { ProfileView } from '../view/profileview/ProfileView'
import { SettingsView } from '../view/settingsview/SettingsView'
import { StoreView } from '../view/storeview/StoreView'
import RoutingPath from './RoutingPath'

export const Routes = ({children}) => {
    return (
        <BrowserRouter>
        {children}
        <Switch>
            <Route exact path={RoutingPath.signInView} component={SignInView} />
            <Route exact path={RoutingPath.storeView} component={StoreView} />
            <Route exact path={RoutingPath.profileView} component={ProfileView} />
            <Route exact path={RoutingPath.settingsView} component={SettingsView} />
            <Route path={'/'} component={HomeView} />
        </Switch>
        </BrowserRouter>
    )
}
