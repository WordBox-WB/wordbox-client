import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
//import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LoginPage from "./views/examples/LoginPage.js";
import LandingPage from "./views/examples/LandingPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";

export default class router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index" render={props => <Index {...props} />} />
                    <Route
                    path="/nucleo-icons"
                    render={props => <NucleoIcons {...props} />}
                    />
                    <Route
                    path="/landing-page"
                    render={props => <LandingPage {...props} />}
                    />
                    <Route
                    path="/profile-page"
                    render={props => <ProfilePage {...props} />}
                    />
                    <Route path="/login-page" render={props => <LoginPage {...props} />} />
                    <Redirect to="/index" />
                    <Redirect from="/" to="/index" />
                </Switch>
            </div>
        )
    }
}
