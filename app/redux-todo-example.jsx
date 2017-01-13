

var redux = require('redux');

console.log('starting redux ');

var stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: [ ]
};

var reducer = (state = stateDefault, action) => {

	switch(action.type){
		case 'CHANGE_SEARCH_TEXT':
			return { 
				...state,
				searchText: action.searchText
			};

		default:
			return state;
	}

}

var store = redux.createStore(reducer);

console.log('Current state', store.getState());

var action = {
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'New search text'
};

store.dispatch(action);

console.log('Now state', store.getState());
