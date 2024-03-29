import React, { Component } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class layout extends Component {
  state = {
    showResults: false
  };

  render() {
    return (
      <>
        <Toolbar showResultsHandler={this.showResultsHandler} />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default layout;
