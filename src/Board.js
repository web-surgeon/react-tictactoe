import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  isWinningSquare(i) {
    return this.props.winningLine && this.props.winningLine.includes(i);
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        selectedMove={this.props.move === i}
        winningSquare={this.isWinningSquare(i)}
        key={i}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        {[...Array(3)].map((i, y) => (
          <div className="board-row" key={y}>
            {[...Array(3)].map((j, x) =>
              this.renderSquare((y + 1) * 3 - (3 - x))
            )}
          </div>
        ))}
      </React.Fragment>
    );
  }
}
