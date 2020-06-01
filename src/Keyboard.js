import React, { Component } from 'react'

class Keyboard extends Component {
	render() {
		return (
			<div className="Keyboard">
				<button onClick={() => this.props.clear()}>C</button>
				<button onClick={() => this.props.type('%')}>%</button>
				<button onClick={() => this.props.deleteLast()}>del</button>
				<button onClick={() => this.props.type('/')}>/</button>
				<button onClick={() => this.props.type('7')}>7</button>
				<button onClick={() => this.props.type('8')}>8</button>
				<button onClick={() => this.props.type('9')}>9</button>
				<button onClick={() => this.props.type('*')}>x</button>
				<button onClick={() => this.props.type('4')}>4</button>
				<button onClick={() => this.props.type('5')}>5</button>
				<button onClick={() => this.props.type('6')}>6</button>
				<button onClick={() => this.props.type('-')}>-</button>
				<button onClick={() => this.props.type('1')}>1</button>
				<button onClick={() => this.props.type('2')}>2</button>
				<button onClick={() => this.props.type('3')}>3</button>
				<button onClick={() => this.props.type('+')}>+</button>
				<button onClick={() => this.props.type('0')}>0</button>
				<button onClick={() => this.props.type('.')}>.</button>
				<button onClick={() => this.props.solve()}>=</button>
			</div>
		)
	}
}

export default Keyboard