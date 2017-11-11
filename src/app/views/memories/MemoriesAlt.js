// @flow weak

import * as React from 'react';
// import PropTypes      from 'prop-types';
import AnimatedView from '../../components/animatedView/AnimatedView';

class Memories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memories: []
        };
    }

    componentDidMount() {
        const memoryCall = fetch('/memoryendpoint');
        memoryCall.then(data => data.json()).then(({memories}) => this.setState({memories}));
    }

    render() {
        return (
            <AnimatedView>
                <h1>
                    Memories
                </h1>
                <div className="col-lg-12 container-fluid">
                    {this.state.memories.map(({id, name, memory, image}, index) => <div className="well col-lg-3 col-md-2"
                                                                                        key={index}>
                        <img style={{width: "100%"}} className="card-img-top" src={`/memoryimages/${image}`}
                             alt={name}/>
                        <div className="card-body">
                            <h4 className="card-title">From: {name}</h4>
                            <p className="card-text">{memory}</p>
                        </div>

                    </div>)}
                </div>

            </AnimatedView>
        );
    }
}

export default Memories;

