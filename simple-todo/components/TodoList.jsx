var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			console.log(itemText);
			return <li>{itemText}</li>;
		};
		return (
			<ul>{this.props.items.map(createItem)}</ul>
		);
	}
});