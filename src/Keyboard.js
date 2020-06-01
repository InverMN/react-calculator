import React, { Component } from 'react'

class Keyboard extends Component {
	render() {
		return (
			<div className="Keyboard">
				<button onClick={this.props.clear}>C</button>
				<button onClick={this.props.clear}>%</button>
				<button onClick={this.props.clear}>del</button>
				<button onClick={this.props.clear}>/</button>
				<button onClick={this.props.clear}>7</button>
				<button onClick={this.props.clear}>8</button>
				<button onClick={this.props.clear}>9</button>
				<button onClick={this.props.clear}>x</button>
				<button onClick={this.props.clear}>4</button>
				<button onClick={this.props.clear}>5</button>
				<button onClick={this.props.clear}>6</button>
				<button onClick={this.props.clear}>-</button>
				<button onClick={this.props.clear}>1</button>
				<button onClick={this.props.clear}>2</button>
				<button onClick={this.props.clear}>3</button>
				<button onClick={this.props.clear}>+</button>
				<button onClick={this.props.clear}>0</button>
				<button onClick={this.props.clear}>.</button>
				<button onClick={this.props.clear}>=</button>
			</div>
		)
	}
}

export default Keyboard