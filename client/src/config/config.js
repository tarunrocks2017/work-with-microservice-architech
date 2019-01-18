const url= {
     GET_MOVIE_URL : 'http://localhost:8080/movies',
     GET_ACTOR_URL : 'http://localhost:8080/actors',
     ADD_ACTOR_URL : 'http://localhost:8080/addActor',
     ADD_MOVIE_URL : 'http://localhost:8080/addMovie',
     DELETE_ACTOR_URL : 'http://localhost:8080/deleteActor/',
     DELETE_MOVIE_URL : 'http://localhost:8080/deleteMovie/',
     EDIT_ACTOR_URL : 'http://localhost:8080/updateActor',
     EDIT_MOVIE_URL :'http://localhost:8080/updateMovie',
}
if(process.env.MODE === 'prod') {
     url.GET_MOVIE_URL = `http://${process.env.IP}:8080/movies`;
     url.GET_ACTOR_URL = `http://${process.env.IP}:8080/actors`;
     url.ADD_ACTOR_URL = `http://${process.env.IP}:8080/addActor`;
     url.ADD_MOVIE_URL = `http://${process.env.IP}:8080/addMovie`;
     url.DELETE_ACTOR_URL = `http://${process.env.IP}:8080/deleteActor/`;
     url.DELETE_MOVIE_URL = `http://${process.env.IP}:8080/deleteMovie/`;
     url.EDIT_ACTOR_URL = `http://${process.env.IP}:8080/updateActor`;
     url.EDIT_MOVIE_URL =`http://${process.env.IP}:8080/updateMovie`;
}

export default url ;