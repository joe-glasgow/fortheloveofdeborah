// @flow weak

import React, {
    PureComponent
}                     from 'react';
// import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import { Link } from 'react-router-dom';

class PageNotFound extends PureComponent {
    render() {
        return(
            <AnimatedView>
                <Jumbotron>
                    <h1>
                        Thanks you! Your memory of Deborah has been posted!
                        You can see the list of memories <Link to="memories">here</Link>
                    </h1>
                </Jumbotron>
            </AnimatedView>
        );
    }
}

export default PageNotFound;
