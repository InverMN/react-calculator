import React, { Component } from 'react';
import Screen from './Screen'
import Keyboard from './Keyboard'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			expression: ""
		}
	}

	render() {
		return (
			<div className="Calculator">
				<Screen 
					expression={this.state.expression}
				/>
				<Keyboard />
			</div>
		)
	}
}

export default App;
