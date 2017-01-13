

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


var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
	var state = store.getState()
	document.getElementById('root').innerHTML = state.searchText
});
//subscribe method


var action = {
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'New search text'
};

store.dispatch(action);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'This is my new text'
});


