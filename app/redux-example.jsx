var redux = require('redux');

console.log('starting redux example');

//pure functions are - 

//no updates outside the function

//no async req/ Promises

//same input should give same output always

//when pass obj and arr make sure you don't manipulate them


var stateDefault = {
	name : 'Anonymous',
	hobbies: [],
	movies: []
};

var nextHobbyId = 1;
var nextMovieID = 1;
var reducer = (state = stateDefault, action) => {

	switch(action.type){
		case 'CHANGE_NAME':
			return { 
				...state,
				name: action.name
			};

		case 'ADD_HOBBIES':
			return {
				...state,
				hobbies: [
				...state.hobbies,
				{
					id: nextHobbyId++,
					hobby: action.hobby
				}
				]
			};

		case 'REMOVE_HOBBY':
			return {
				...state,
				hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
			}

		case 'REMOVE_MOVIE':
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id != action.id)
			}

		case 'ADD_MOVIES':
			return {
				...state,
				movies: [
				...state.movies,
				{
					id: nextMovieID++,
					name: action.movie.name,
					actor: action.movie.actor
				}
				]
			}

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
	//console.log('New state ', state.name);
	document.getElementById('root').innerHTML = state.name;
	console.log('New state ', store.getState() );
});

// //unsubscribed 
// unsubscribe();

var action = {
	type: 'CHANGE_NAME',
	name: 'Abhishek'
};

store.dispatch(action);


store.dispatch({
	type: 'ADD_HOBBIES',
	hobby: 'running'
})

store.dispatch({
	type: 'ADD_HOBBIES',
	hobby: 'walking'
})

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emily'
})

store.dispatch({
	type: 'REMOVE_HOBBY',
	id: 2
})

store.dispatch({
	type: 'ADD_MOVIES',
	movie: {
		name: '8 Mile',
		actor: 'Eminem',
	}
})

store.dispatch({
	type: 'ADD_MOVIES',
	movie: {
		name: 'My movie',
		actor: 'Eminem',
	}
})

store.dispatch({
	type: 'REMOVE_MOVIE',
	id:2
})

