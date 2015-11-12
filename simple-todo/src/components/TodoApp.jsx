'use strict';

var React = require('react');
var TodoList = require('./TodoList.jsx');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			items: [],
			text: ''
		}
	},
	onChange: function (e) {
		this.setState({
			text: e.target.value
		});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var inputText = this.state.text;
		if (inputText) {
			var nextItems = this.state.items.concat([inputText]);
			var nextText = '';
			this.setState({
				items: nextItems,
				text: nextText
			});	
		}
		
	},
	render: function() {
		return (
			<div>
				<h3>TODO</h3>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} type='text' value={this.state.text} />
					<button>{'Add #' + (this.state.items.length +  1) }</button>
				</form>
				<TodoList items={this.state.items}></TodoList>
				
			</div>
		);
	}
});

module.exports = TodoApp;