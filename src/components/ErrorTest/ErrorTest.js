import React from 'react';

export default class ErrorTest extends React.Component {

    state = {
        error: false
    };

    render() {
        console.log('test error');
        if (this.state.error) {
            this.mytest.test = 'test';
        }
        return(
            <button onClick={() => this.setState({error: true})}
            >test error</button>
        );
    }
}