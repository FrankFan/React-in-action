import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends React.Component {
	constructor() {
		super();
		this.state = { val: 0 };
		this.update = this.update.bind(this);
	}

	update() {
		console.log(this.state.val);
		this.setState({ val: this.state.val + 1});
	}

	componentWillMount() {
		console.log('mounting');
		this.setState({m: 2});
	}

	render() {
		console.log('rendering!');
		return (
			<div>
				<button onClick={this.update}>
					{this.state.val * this.state.m}
				</button>
			</div>
		)
	}

	componentDidMount() {
		console.log('mounted');
		// console.log(ReactDOM.findDOMNode(this));
		this.inc = setInterval(this.update, 500);
	}

	componentWillUnmount() {
		console.log('bye!');
		clearInterval(this.inc);
	}

	componentWillUpdate(nextProps, nextState) {
		
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