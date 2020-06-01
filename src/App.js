import React, { Component } from 'react';
import Screen from './Screen'

class App extends Component {
	render() {
		return (
			<div className="Calculator">
				<Screen />
				{/* <Keyboard /> */}
			</div>
		)
	}
}

export default App;
