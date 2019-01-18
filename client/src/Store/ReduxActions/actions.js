import {
    ADD_MOVIE,
    ADD_ACTOR,
    GET_ACTORS,
    GET_MOVIES,
    EDIT_ACTOR,
    EDIT_MOVIE,
    DELETE_ACTOR,
    DELETE_MOVIE,

} from './constant';

// import {GET_MOVIE_URL} from '../../config/config';
// import {GET_ACTOR_URL} from '../../config/config';
// import {ADD_ACTOR_URL} from '../../config/config';
// import {ADD_MOVIE_URL} from '../../config/config';
// import {DELETE_ACTOR_URL} from '../../config/config';
// import {DELETE_MOVIE_URL} from '../../config/config';
// import {EDIT_ACTOR_URL} from '../../config/config';
// import {EDIT_MOVIE_URL} from '../../config/config'; 

import url from '../../config/config';

export const getMovies = () => {
    console.log("in getMovies");
    return async dispatch => {
       // const url = "http://localhost:8080/movies";
        const response = await fetch(url.GET_MOVIE_URL);
        const result = await response.json();
        console.log(result);
        dispatch({
            type:GET_MOVIES, val:{result}
        })
    }
}

export const getActors = () => {
    console.log("in getActors");
    return async dispatch => {
        // const url = "http://localhost:8080/actors";
        const response = await fetch(url.GET_ACTOR_URL);
        const result = await response.json();
        console.log(result);
        dispatch({
            type:GET_ACTORS, val:{result}
        }) 
    }
}

export const addActors = (actor) => {
    console.log(actor);
    return async dispatch => {
       // const url = "http://localhost:8080/addActor";
        const response = await fetch(url.ADD_ACTOR_URL,{method:'POST',mode:'cors',
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({
            actorname:actor.actorname,
            movieid:actor.moviename,
            activeYear:actor.activeYear,
            image_url:actor.image_url,
            totalmovies:actor.totalmovies
        })
    });
    const result = await response.json();
    console.log(result);
    dispatch({
        type:ADD_ACTOR, val:{result}
    })
}
}

export const addMovies = (movie) => {
    console.log("i am adding the movie in db");
    return async dispatch => {
      // const url = "http://localhost:8080/addMovie";
        const response = await fetch(url.ADD_MOVIE_URL,{method:'POST',mode:'cors',
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({
            moviename:movie.moviename,
            releaseYear:movie.releaseYear,
            status:movie.status,
            actorname:movie.actorname,
            image:movie.image_url,
            description:movie.desc
        })
    });
    const result = await response.json();
    console.log(result);
    dispatch({
        type:ADD_MOVIE, val:{result}
    })
}
}

export const deleteMovie = (movieid) => {
    console.log("i am in delete movie ");
    return async dispatch => {
        const deleteUrl = url.DELETE_MOVIE_URL+""+movieid;
    
        const response = await fetch(deleteUrl, {
            method:'GET',
            mode:'cors',
            headers:{"Content-Type": "application/json"},
        });
        const result = await response.json();
        console.log(result);
        dispatch({
            type:DELETE_MOVIE, val:+movieid
        })
    }
}

export const deleteActor = (actorid) => {
    console.log("i am in deltee actor") ;
    return async dispatch => {
        const deleteActorurl = url.DELETE_ACTOR_URL+""+actorid;

        const response = await fetch(deleteActorurl, {
            method: "DELETE",
            mode: "cors",
            header: {"Content-Type": "application/json"},
        });
        await response.json();
        console.log("actorid = "+ actorid);
        dispatch({
            type:DELETE_ACTOR, val:+actorid                        // + to change string to decimal integer
        })
    }
}

export const editActor = (state) => {
    console.log("i am in edit actor");

    return async dispatch => {
        //const url = "http://localhost:8080/updateActor";

        const response = await fetch(url.EDIT_ACTOR_URL, {
            method: "PUT",
            mode: "cors",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                id:state.actorid,
                actorname:state.actorname,
                activeYear:state.activeYear,
                movieid:state.movieid,
                image_url:state.image_url,
                totalmovies:state.totalmovies,

            })
        });
        const id = +state.actorid;
        console.log("id is = "+id);
        const result = await response.json();
        console.log(result);
        dispatch({
            type:EDIT_ACTOR, val:{result,id}
        })
    }
}

export const editMovie = (state) => {
    return async dispatch => {
       // const url = "http://localhost:8080/updateMovie";

        const response = await fetch(url.EDIT_MOVIE_URL, {
            method: "PUT",
            mode: "cors",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                id:state.movieid,
                moviename: state.moviename,
                status: state.status,
                image_url: state.image_url,
                actorname: state.actorname,
                description: state.description,
                releaseYear: state.releaseYear,
            })
        });
        const id = +state.movieid;
        console.log("id is = "+id);
        const result = await response.json();
        console.log(result);
        dispatch({
            type:EDIT_MOVIE, val:{result,id}
        })
    }
}
