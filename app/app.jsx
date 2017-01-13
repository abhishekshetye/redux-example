

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');



$(document).ready(function($) {
    $(document).foundation();
});

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');


//require('./redux-todo-example.jsx');
require('./redux-example.jsx');