// 组件的生命周期


var Timer = React.createClass({

	getInitialState: function() {
		return {opacity: 1.0};
	},

	componentDidMount: function() {
		this.timer = setInterval(function() {
			var opacity = this.state.opacity;
			opacity -= 0.5;
			if (opacity < 0.1) {
				opacity = 1.0;
			}
			this.setState({
				opacity: opacity
			});
		}.bind(this), 100);
	},

	render: function () {
		return (
			<h1 style={{opacity: this.state.opacity}}>
				Hello {this.props.name}
			</h1>	
		);
	}
});