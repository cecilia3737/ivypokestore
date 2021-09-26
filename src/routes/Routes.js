import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { SignInView } from '../view/signinview/SignInView'
import { ProfileView } from '../view/profileview/ProfileView'
import { SettingsView } from '../view/settingsview/SettingsView'
import { StoreView } from '../view/storeview/StoreView'
import { ProductView } from '../view/productview/ProductView'
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
            <Route exact path={RoutingPath.productView} component={ProductView} />
            <Route path={RoutingPath.homeView} component={HomeView} />

            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
    )
}
