// @flow weak

import React, {
    PureComponent
} from 'react';
// import PropTypes      from 'prop-types';
import AnimatedView from '../../components/animatedView/AnimatedView';
import { Link }         from 'react-router-dom';

class About extends PureComponent {
    render() {
        return (
            <AnimatedView>
                <div className="text-center col-lg-12">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <p>Deborah left us on the 8th November 2017 after a hard fought and courageous battle with
                            Cancer. She
                            leaves behind her beloved husband Fraz, many friends, family and the countless souls she
                            touched in
                            her lifetime.</p>
                        <p>Here we can share memories and create a space to collectively remember Deborah through the
                            good times that were shared.</p>
                    </div>
                    <div className="col-lg-4"></div>
                </div>

                <div className="text-center col-lg-12">
                    <div className="col-lg-4"></div>
                    <p className="col-lg-4">
                        <Link
                            className="btn btn-success btn-lg"
                            to={'/addamemory'}>
                            <i className="fa fa-plus-circle"/>
                            &nbsp;
                            Add a Memory of Deborah
                        </Link>
                    </p>
                    <div className="col-lg-4"></div>
                </div>
            </AnimatedView>
        );
    }
}

export default About;
