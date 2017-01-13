var redux = require('redux');

console.log('starting redux example');

//pure functions are - 

//no updates outside the function

//no async req/ Promises

//same input should give same output always

//when pass obj and arr make sure you don't manipulate them


var stateDefault = {
	name : 'Anonymous'
};

var reducer = (state = stateDefault, action) => {

	switch(action.type){
		case 'CHANGE_NAME':
			return { 
				...state,
				name: action.name
			};

		default:
			return state;
	}

};

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {

	var state = store.getState();
	//need to re-render components here
	console.log('New state ', state.name);
	document.getElementById('root').innerHTML = state.name;
});

// //unsubscribed 
// unsubscribe();

var action = {
	type: 'CHANGE_NAME',
	name: 'Abhishek'
};

store.dispatch(action);


store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emily'
})




