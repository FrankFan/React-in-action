// 组件的嵌套

var Search = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.searchType}: <input type="text"/>
				<button>Search</button>
			</div>
		);
	}
});


var Page = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Welcome!</h1>
				<Search searchType="Title"></Search>
				<Search searchType="Content"></Search>
			</div>
		);
	}
});