import { Component } from 'react';
export default class MainClassComponent extends Component {
    render() {
        return <h2>Hello from MainClassComponent</h2>
    }
}

export class ChildComponent1 extends Component{
    render(){
        return <h2>Hello From ChildComponent1</h2>
    }
}

export class ChildComponent2 extends Component{
    render(){
        return <h2>Hello From ChildComponent2</h2>
    }
}