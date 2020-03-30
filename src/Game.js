import React from "react";
import Board from "./Board";
import { getLatestMoveClass } from "./_helpers";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.totalRowsCols = 3;
    this.totalSquares = this.totalRowsCols * this.totalRowsCols;
    this.initialState = {
      history: [
        {
          squares: Array(this.totalSquares).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      winningLine: false
    };

    this.state = this.initialState;
  }

  resetGame() {
    this.setState(this.initialState);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const marker = this.getMarker();
    const posX = (i % this.totalRowsCols) + 1;
    const posY = Math.floor(i / this.totalRowsCols) + 1;
    let audio = new Audio("./winner.mp3");

    if (squares[i]) {
      return;
    }

    if (this.state.winningLine) {
      return false;
    }

    squares[i] = marker;

    if (this.calculateWinner(squares)) {
      this.setState({ winningLine: this.calculateWinner(squares) });

      audio.play();
    }

    this.setState({
      history: history.concat([{ squares, posX, posY, marker, i }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  getMarker() {
    return this.state.xIsNext ? "X" : "0";
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  getMoveList() {
    return this.state.history.map((step, move) => {
      const alphaMoves = ["", "A", "B", "C"];

      if (!step.marker) {
        return false;
      }

      const desc = `#${move}  (${step.marker} - ${step.posY}${
        alphaMoves[step.posX]
      })`;

      return (
        <button
          key={move}
          className={getLatestMoveClass(this.state.stepNumber === move)}
          onClick={() => this.jumpTo(move)}
        >
          <span>Go to move</span> {desc}
        </button>
      );
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return lines[i];
      }
    }

    return null;
  }

  getGameHistory(number = false) {
    const history = this.state.history;

    if (number) {
      return history[number];
    } else {
      return history.slice(-1).pop();
    }
  }

  getWinningMarker(squares) {
    const winningLine = this.calculateWinner(squares);
    const current = this.getGameHistory();

    if (!winningLine) {
      return false;
    }

    return current.marker;
  }

  getBoardStatus(winner) {
    if (winner) {
      return "And the winner is <em>" + winner + "</em>.";
    } else if (this.state.history.length > this.totalSquares) {
      return "The game has finished in a <em>tie</em>.";
    } else {
      return "The next move belongs to <em>" + this.getMarker() + "</em>.";
    }
  }

  render() {
    const current = this.getGameHistory(this.state.stepNumber);
    const winner = this.getWinningMarker(current.squares);
    const status = this.getBoardStatus(winner);
    const moves = this.getMoveList();

    return (
      <div className="game-container">
        <div className="game-status">
          <button className="game-reset" onClick={() => this.resetGame()}>
            Reset
          </button>

          <span dangerouslySetInnerHTML={{ __html: status }} />
        </div>

        <div className={"game " + (!winner ? "active" : "done")}>
          <div className="game-board">
            <Board
              squares={current.squares}
              move={current.i}
              onClick={i => this.handleClick(i)}
              winningLine={this.state.winningLine}
            />
          </div>
          <div className="game-info">
            <h5>Game History</h5>
            <div>{moves}</div>
          </div>
        </div>
      </div>
    );
  }
}
