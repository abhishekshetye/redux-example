var redux = require('redux');
var axios = require('axios');
console.log('starting redux example');

//pure functions are - 

//no updates outside the function

//no async req/ Promises

//same input should give same output always

//when pass obj and arr make sure you don't manipulate them


// var stateDefault = {
// 	name : 'Anonymous',
// 	hobbies: [],
// 	movies: []
// };


//Name reducers and action generators 
//-------------------------
var nameReducer = (state = 'Anomymous', action) => {
	switch(action.type){
		case 'CHANGE_NAME':
			return action.name;

		default:
		return state;
	}
}

var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	}
}



//Hobby reducers and action generators 
//-------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {

	switch(action.type){
		case 'ADD_HOBBIES':
			return [
			...state,
			{
				id: nextHobbyId++,
				hobby: action.hobby
			}
			]

		case 'REMOVE_HOBBY':
			return state.filter((hobby) => hobby.id !== action.id)
			
		default:
		return state;
	}
}

var addHobby = ((hobby) => {
	return {
		type: 'ADD_HOBBIES',
		hobby
	}
})

//Movie reducers and action generators 
//-------------------------
var nextMovieID = 1;
var moviesReducers = (state = [], action ) => {
	switch(action.type){
		case 'ADD_MOVIES':
		return [
			...state,
			{
				id : nextMovieID++,
				name: action.name,
				actor: action.actor
			}
		]
		case 'REMOVE_MOVIE':
			return state.filter((movie) => movie.id != action.id)

		default:
			return state;
	}
}

var addMovie = ((name, actor) => {
	return {
		type: 'ADD_MOVIES',
		name ,
		actor 
	}
})


//map reducers and action generators
//-----------------------------------

var mapReducers = (state = {isFetching: false, url: undefined} , action) => {

	switch(action.type){
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined
			};
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url
			};
		default:
			return state;
	}
};

var startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
}

var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url
	}
}

var fetchLocation = () => {
	store.dispatch(startLocationFetch());


	axios.get('http://ipinfo.io').then(function(res){
		var loc = res.data.loc;
		var baseUrl = 'http://maps.google.com?q=';

		store.dispatch(completeLocationFetch(baseUrl + loc));
	});
};




//main reducers
var reducer = redux.combineReducers({
	name : nameReducer,
	hobbies : hobbiesReducer,
	movies : moviesReducers,
	map: mapReducers
})

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {

	var state = store.getState();

	if(state.map.isFetching){
		document.getElementById('root').innerHTML = 'Loading'		
	}else if (state.map.url) {
		document.getElementById('root').innerHTML = '<a href="' + state.map.url + '" target="_blank"> View your location </a>'
	}
	//need to re-render components here
	// //console.log('New state ', state.name);
	// document.getElementById('root').innerHTML = state.name;
	console.log('New state ', store.getState() );
});

// //unsubscribed 
// unsubscribe();

var action = {
	type: 'CHANGE_NAME',
	name: 'Abhishek'
};


fetchLocation();

store.dispatch(changeName('Abhishek'));

store.dispatch(addHobby('Running'))

store.dispatch(addHobby('Walking'))

store.dispatch(changeName('Emilys'))

store.dispatch({
	type: 'REMOVE_HOBBY',
	id: 2
})

store.dispatch(addMovie('Dil chata hai', 'Aamir khan'))

store.dispatch(addMovie('Star wars', 'Dont know'))

store.dispatch({
	type: 'REMOVE_MOVIE',
	id:2
})

