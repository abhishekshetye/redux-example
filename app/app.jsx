

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');



$(document).ready(function($) {
    $(document).foundation();
});

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
<Router history={hashHistory}>
	<Route path='/' component={Main}>
	
	</Route>
</Router>,
document.getElementById('root')
);
