import React from 'react';
import '../../actor.css';
import MovieComponent from './movieComponent';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteMovie} from '../../Store/ReduxActions/actions';

class movieContent extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
  
    handleDelete(e) {
        const id = e.target.id ;
        this.props.deleteMovie(id);
    }

    render() {
        return (
                <section className="container-fluid d-flex">
                <div className="movie-operation">
                    <ul className="movie-operation-list">
                       <Link to="/movies/addMovies"><li>ADD MOVIE</li></Link>
                    </ul>
                </div>
                <div className="movie-list-container d-flex">
                    <div className="list-heading">
                        <ul>
                            <li>MovieImage</li>
                            <li>MovieName</li>
                            <li>ReleaseYear</li>
                            <li>status</li>
                            <li>ActorName</li>
                        </ul>
                    </div>
                    <div className="content-list d-flex">
                        {
                            this.props.movies.map((movie) => {
                                return <MovieComponent movie={movie} method={this.handleDelete} />
                            })
                        }
                    </div>
                </div>
                   
            </section>
        )
    }
}
const mapMovieStateProps = (state) => {
    return {
        movies:state.movies
    }
}
const mapDispatchToProps = { deleteMovie }

export default connect(mapMovieStateProps,mapDispatchToProps)(movieContent);