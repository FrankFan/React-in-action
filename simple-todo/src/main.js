'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('./components/TodoApp.jsx');

var mountNode = document.getElementById('app');
ReactDOM.render(<TodoApp />, mountNode);