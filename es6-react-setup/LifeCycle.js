import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component {
	constructor() {
		super();
		this.state = { val: 0 };
		this.update = this.update.bind(this);
	}

	update() {
		this.setState({ val: this.state.val + 1});
	}

	componentWillMount() {
		console.log('mounting');
	}

	render() {
		console.log('rendering!');
		return (
			<div>
				<button onClick={this.update}>{this.state.val}</button>
			</div>
		)
	}

	componentDidMount() {
		console.log('mounted');
	}

	componentWillUpdate(nextProps, nextState) {
		
	}

	componentWillUnmount() {
		console.log('bye!');
	}
}

export default LifeCycle

class Wrapper extends React.Component {
	constructor() {
		super();
	}
	mount() {
		ReactDOM.render(<LifeCycle />, document.getElementById('a'))
	}
	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		);
	}
}

export default Wrapper