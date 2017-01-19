var redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobbiesReducer, moviesReducers, mapReducers} = require('./../reducers/index');

export var configure = () => {
	//main reducers
var reducer = redux.combineReducers({
	name : nameReducer,
	hobbies : hobbiesReducer,
	movies : moviesReducers,
	map: mapReducers
})

var store = redux.createStore(reducer, redux.compose(
	redux.applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

return store;
}