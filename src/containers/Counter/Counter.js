import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../action/action';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../action/action';

class Counter extends Component {
    state = {
        counter: 0,
        results : []
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.results.map(element => (
                        <li 
                        key={element.id} 
                        onClick={() => this.props.onDeleteResult(element.id)}>
                        {element.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// state used here is the global state that is formed after combining the 2 reducers
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results : state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubstractCounter: () => dispatch(actionCreators.substract(5)),
        onStoreResult: (counter) => dispatch(actionCreators.storeResult(counter)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps , mapDispatchToProps)(Counter);