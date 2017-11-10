// @flow weak

import React, {
    PureComponent
} from 'react';
// import PropTypes      from 'prop-types';
import AnimatedView from '../../components/animatedView/AnimatedView';

class AddAMemory extends PureComponent {
    render() {
        return (
            <AnimatedView>
                <h1>
                    Add A Memory
                </h1>
                <section className="col-lg-12 content-secondary">
                    <form encType="multipart/form-data" className="center-block" action="/addamemory" method="post">
                        <div className="row col-lg-6">
                            <div className="form-group col-lg-12">
                                <label className="text-primary" htmlFor="name">Your name:
                                    <small className="label-error"> required *</small>
                                </label>
                            </div>
                            <div className="form-group col-lg-12">
                                <input placeholder="name" pattern="[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$"
                                       required id="name" name="name" className="input col-lg-12 input-lg"/>
                            </div>
                            <div className="form-group col-lg-12">
                                <label placeholder="name" className="text-primary" htmlFor="memory">Speak of your
                                    memory:
                                    <small className="label-error"> required *</small>
                                </label>
                            </div>
                            <div className="form-group col-lg-12">
                                <textarea placeholder="some happy times" maxLength={450} rows="3" required id="memory" name="memory" className="input col-lg-12 input-lg"/>
                            </div>
                        </div>
                        <div className="row col-lg-6">
                            <div className="form-group col-lg-12">
                                <label className="text-primary" htmlFor="photo">Add a photo:
                                    <small className="label-error"> required *</small>
                                </label>
                            </div>
                            <div className="form-group col-lg-12">
                                <input required type="file" className="form-control-file" accept="image/*" id="photo"
                                       name="photo"/>
                            </div>
                        </div>
                        <div className="row col-lg-6">
                            <div className="form-group col-lg-12">
                                <button className="btn btn-success btn-lg" type="submit">Share your memory</button>
                            </div>
                        </div>
                    </form>
                </section>
            </AnimatedView>
        );
    }
}

export default AddAMemory;