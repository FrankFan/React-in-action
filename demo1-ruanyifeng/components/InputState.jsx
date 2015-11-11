// 组件状态
// state

var InputState = React.createClass({
	getInitialState: function() {
		return { enable: false };
	},

	handleClick: function() {
		console.log(this.state.enable);
		this.setState({ enable: !this.state.enable });
	},

	render: function() {
		return (
			<p>
				<input type="text" disabled={this.state.enable} />
				<button onClick={this.handleClick}>Change State</button>
			</p>
		)
	}
});