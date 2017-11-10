// @flow weak

import React from 'react';
import {
    Route,
    Switch
} from 'react-router';
import {
    Home,
    About,
    PageNotFound,
    AddAMemory,
    ThankYou,
    Memories
} from '../views';

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/addamemory" component={AddAMemory}/>
            <Route path="/thankyou" component={ThankYou}/>
            <Route path="/memories" component={Memories}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
};

export default MainRoutes;
