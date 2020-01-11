import React, { Component } from 'react'
import Square from './Square'
import {calculateWinner} from '../controller/winner'
import '../styles/Board.css'

export class Board extends Component {
    constructor(props){
        super(props);

        this.state = {
            Squares:Array(9).fill(null),
            xIsNext:true,
        }
    }

    handleClinck(i){
        const square = this.state.Squares.slice();
        if (calculateWinner(square) || square[i]){
            return ;
        }
        const xIsNext = this.state.xIsNext;
        square[i] = xIsNext? 'X':'O';
        this.setState({
            Squares: square,
            xIsNext: !xIsNext,
        });
    }

    renderSquare(i) {
        return <Square value={this.state.Squares[i]} onClick={()=>this.handleClinck(i)}/>
    }

    render() {
        const winner = calculateWinner(this.state.Squares)
        let status;
        if(winner){
            status = 'Winner: ' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        )
    }
}

export default Board
