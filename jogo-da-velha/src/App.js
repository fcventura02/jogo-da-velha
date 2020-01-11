import React, { Component } from 'react'
import Board from './components/Board'
import './styles.css'

export class App extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">

                </div>
                
            </div>
        )
    }
}

export default App
