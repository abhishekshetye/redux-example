var redux = require('redux');

console.log('starting redux example');

//pure functions are - 

//no updates outside the function

//no async req/ Promises

//same input should give same output always

//when pass obj and arr make sure you don't manipulate them


var reducer = (state = {name: 'Anonymous'}, action) => {
	
	return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('current state ', currentState);