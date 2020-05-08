import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Enter from '../Enter';
import App from './App'
import DoesNotExist from './DoesNotExist'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Enter} />
            <Route exact path="/app/" component={App} />
            <Route component={DoesNotExist} />
        </Switch>
    </BrowserRouter>
);

export default Router;