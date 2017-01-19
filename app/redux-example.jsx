var redux = require('redux');

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


var actions = require('./actions/index');
var store = require('./store/configureStore').configure();



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


store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Abhishek'));

store.dispatch(actions.addHobby('Running'))

store.dispatch(actions.addHobby('Walking'))

store.dispatch(actions.changeName('Emilys'))

store.dispatch({
	type: 'REMOVE_HOBBY',
	id: 2
})

store.dispatch(actions.addMovie('Dil chata hai', 'Aamir khan'))

store.dispatch(actions.addMovie('Star wars', 'Dont know'))

// store.dispatch({
// 	type: 'REMOVE_MOVIE',
// 	id:2
// })

