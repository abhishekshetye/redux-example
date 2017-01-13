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

}

var store = redux.createStore(reducer);

console.log('Current state', store.getState());

var action = {
	type: 'CHANGE_NAME',
	name: 'Abhishek'
};

store.dispatch(action);

console.log('Now state', store.getState());
