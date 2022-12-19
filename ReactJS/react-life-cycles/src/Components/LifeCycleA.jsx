import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Message: "Welcome to LifeCycles",
      // shouldComponentUpdate:true
      showParagraph: true
    };
    console.log("This is From Constructor LifeCycleA");
  }
  ChangeMessage = () => {
    this.setState({
      Message: "this Message will Change from welcome to LifeCycleA!!!",
    });
  };
  showParagraph=()=>{
    this.setState({showParagraph:!this.state.showParagraph})
  }
  render() {
    console.log("This is from Render LifeCycleA");
    return (
      <div>
        <button onClick={this.ChangeMessage}>get values from server</button>
        <LifeCycleB msg={this.state.Message} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iusto
          aut. Sint impedit, perspiciatis sunt corrupti unde aperiam dolore
          officia?
        </p>
        <button onClick={this.showParagraph}>show/hide</button>
        {this.state.showParagraph && <Paragraph Component/>}
      </div>
    );
  }
  componentDidMount() {
    console.log("This is from ComponentDidMount LifeCycleA");
  }
}
