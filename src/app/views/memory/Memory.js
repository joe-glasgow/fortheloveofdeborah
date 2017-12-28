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
        let rows = [];
        let cards = [];

        this.state.memories.map(({id, name, memory, image}, index) => {
            cards.push(<div className="card"
                           key={index}>
                <div className="card-header">
                    <img style={{width: "100%"}} className="card-img" src={`/memoryimages/${image}`}
                         alt={name}/>
                </div>
                <div className="card-footer">
                    <h4 className="card-title">From: {name}</h4>
                    <p className="card-blockquote">{memory}</p>
                </div>

            </div>)
            if ((index + 1) % 3 == 0) {
                rows.push(
                    <div className="row card-deck justify-content-center" key={index}>
                        {cards}
                    </div>
                )
                cards = [];
            }
        });

        return (
            <AnimatedView>
                <h1>
                    Memories
                </h1>
                <div className="container-fluid">
                    {rows}
                </div>

            </AnimatedView>
        );
    }
}

export default Memories;

