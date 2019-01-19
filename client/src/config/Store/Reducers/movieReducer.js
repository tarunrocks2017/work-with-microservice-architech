

const movieReducer = (state = [] , action) => {

    switch(action.type){

        case 'ADD_MOVIE':
             const oldState = [...state];
             oldState.push(action.val.result[0]);
            return oldState;

        case 'GET_MOVIES':
            state = action.val.result;
            return state;

        case 'EDIT_MOVIE' :
            const updatedMovieState = [...state];
            const indexOfMovieObject = updatedMovieState.findIndex(obj => obj.movieid === action.val.id);
            updatedMovieState.splice(indexOfMovieObject,1,action.val.result[0]);
            return updatedMovieState
            
            
        case 'DELETE_MOVIE' :
            const newUpdatedMovieState = [...state];
            const newMovies = newUpdatedMovieState.filter(element => element.movieid !== action.val);
            return newMovies
            
        
        default :
        return state;
    }
};



export default movieReducer;