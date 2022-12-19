import React, { Component } from 'react'

export default class ParagraphComponent extends Component {
  render() {
    return (
      <div>{this.props.show && <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iusto
        aut. Sint impedit, perspiciatis sunt corrupti unde aperiam dolore
        officia?
      </p>}</div>
    )
  }
  componentWillUnmount(){
    console.log("This Component is going to be removed from DOM")
  }
}
