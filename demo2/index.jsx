/** @jsx React.DOM */
'use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./Hello.jsx');

console.log(Hello);
ReactDOM.render(<Hello /> , document.getElementById('content'));