import React, { Component } from 'react'
import '../styles/Square.css'

export class Square extends Component {
    render() {
        console.log(this.props)
        return (
            <button className = 'square' onClick = {()=> this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}

export default Square
