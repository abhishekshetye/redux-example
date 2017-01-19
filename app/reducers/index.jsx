export var nameReducer = (state = 'Anomymous', action) => {
	switch(action.type){
		case 'CHANGE_NAME':
			return action.name;

		default:
		return state;
	}
}

var nextHobbyId = 1;
export var hobbiesReducer = (state = [], action) => {

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

var nextMovieID = 1;
export var moviesReducers = (state = [], action ) => {
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

export var mapReducers = (state = {isFetching: false, url: undefined} , action) => {

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