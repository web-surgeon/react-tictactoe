import React from "react";
import { getLatestMoveClass } from "./_helpers";

export default class Square extends React.Component {
  getButtonClasses() {
    let classes = ["square", getLatestMoveClass(this.props.selectedMove)];

    if (!this.props.value) {
      classes.push("available");
    }

    if (this.props.winningSquare) {
      classes.push("winning-square");
    }

    return classes.join(" ");
  }

  render() {
    return (
      <button className={this.getButtonClasses()} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
