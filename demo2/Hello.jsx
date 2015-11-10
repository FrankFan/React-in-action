// from http://jslog.com/2014/10/02/react-with-webpack-part-1/
/** @jsx React.DOM */

'use strict'
var React = require('react');

module.exports = React.createClass({
	displayName: 'HelloReact',
	render: function () {
		return (
			<div> Hello React </div>
		);
	}
})