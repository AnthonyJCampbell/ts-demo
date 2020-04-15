import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import PostDetail from "./screens/PostDetail";
import MainScreen from "./screens/Main";

export default () => (
    <div data-testid="app">
        <Router>
            <Switch>
                <Route exact path="/" component={MainScreen} />
                <Route exact path="/posts/:id" component={PostDetail} />
                <Redirect to="/" />
            </Switch>
        </Router>
    </div>
);
