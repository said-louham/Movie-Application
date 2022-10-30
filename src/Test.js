import React, { Component } from 'react';
class Counter extends Component {
   constructor(){
   super()
    this.state = { 
        name:'said',
        counter:0
     } 
   }
    render() { 
        return (
            <>
            <h1>{this.state.name}</h1>
            <h1>{this.state.counter}</h1>
            </>
        ); 
    }
} 
export default Counter;