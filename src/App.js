import React, { Component } from 'react';
import Screen from './Screen'
import Keyboard from './Keyboard'
import './style.css'
import { evaluate } from 'mathjs'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			expression: ""
		}
	}

	clear = () => {
		this.setState({ expression: "" })
	}

	deleteLast = () => {
		this.setState({ expression: this.state.expression.slice(0, -1) })
	}

	type = char => {
		this.setState({ expression: this.state.expression + char })
	}

	solve = () => {
		this.setState({ expression: evaluate(this.state.expression) })
	}

	render() {
		return (
			<div className="Calculator">
				<Screen 
					expression={this.state.expression}
				/>
				<Keyboard 
					clear={this.clear}
					deleteLast={this.deleteLast}
					type={this.type}
					solve={this.solve}
				/>
			</div>
		)
	}
}

export default App;
