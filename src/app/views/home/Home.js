// @flow weak

import React, {
  PureComponent
}                       from 'react';
// import PropTypes        from 'prop-types';
import {Jumbotron}      from '../../components';
import cx               from 'classnames';
import { Link }         from 'react-router-dom';

class Home extends PureComponent {
  state = {
    animated: true,
    viewEntersAnim: true,
      textCenter: true
  };

  render() {
    const { animated, viewEntersAnim, textCenter } = this.state;
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim,
            'text-center': textCenter
        })}>
          <div className="text-center col-lg-12">
              <div className="col-lg-4"></div>
              <div className="well col-lg-4"><img style={{width: "100%"}} className="img-circle" src="assets/debs.gif" alt=""/></div>
              <div className="col-lg-4"></div>
          </div>
        <Jumbotron>
          <h1>
            In Loving Memory of Deborah
          </h1>
        </Jumbotron>
          <div className="text-center col-lg-12">
              <div className="col-lg-4"></div>
              <p className="col-lg-4">
                  <Link
                      className="btn btn-success btn-lg"
                      to={'/addamemory'}>
                      <i className="fa fa-plus-circle" />
                      &nbsp;
                      Add a Memory of Deborah
                  </Link>
              </p>
              <div className="col-lg-4"></div>
          </div>


      </div>
    );
  }
}

export default Home;
