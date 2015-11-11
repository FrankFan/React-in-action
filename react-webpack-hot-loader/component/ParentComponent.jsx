var ParentCompnent = React.createClass({
	callChildFn: function () {
		this.refs.getSwordButton.clickBtn;
	},
	render: function () {
		return (
			<div>
				<ButtonComponent ref="getSwordButton" />
			</div>
		);
	}
});