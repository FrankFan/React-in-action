var ButtonComponent = React.createClass({
	getInitialState: function () {
		return {
			clicked: false
		}
	},
	clickBtn: function() {
		console.log('送宝刀');
		this.setState({
			clicked: true
		});
	},
	render: function() {
		var clicked = this.state.clicked;
		if (clicked) {
			return (
				<button disabled="disabled" onClick="clickBtn">已领取过屠龙宝刀</button>
			);
		} else {
			return (
				<button onClick="clickBtn">屠龙宝刀，点击就送</button>
			);
		}
		
	}
});