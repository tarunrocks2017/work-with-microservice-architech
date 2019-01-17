import React from 'react';
import '../../AddMovie.css';
import Redirect from 'react-router-dom/Redirect';
import { connect } from 'react-redux';
import {addMovies} from '../../Store/ReduxActions/actions';

class AddMovieForm extends React.Component {
    constructor(){
        super();
        this.state = {
            redirect:false,
                moviename:'',
                status:'',
                releaseYear:'',
                actorname:'',
                image_url:'',
                desc:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.addMovies(this.state);
        this.redirect();
    }
    redirect(){
       this.setState({
            redirect:true,
        })
    }
    
    render() {
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to="/movies" />
        }
        return (
            <section className="container-fluid">
            <img src= './images/form-background-01.jpg' alt="movieimage" />
            <div className="form-div opacity"></div>
            <div className="form-div">
                    <form className="add-movie-form d-flex" onSubmit={this.handleSubmit}>

                            <div className="form-group">
                              <label for="exampleInputEmail1">MovieName</label>
                              <input type="text" className="form-control" value={this.state.moviename} placeholder="MovieName" name="moviename" onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                              <label for="exampleInputPassword1">ReleaseYear</label>
                              <input type="number" className="form-control" value={this.state.releaseYear} placeholder="ReleaseYear" name="releaseYear" onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Status</label>
                                <input type="text" className="form-control"  value={this.state.status} placeholder="Status" name="status" onChange={this.handleChange}></input>
                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">ActorName</label>
                                <input type="text" className="form-control"  value={this.state.actorname} placeholder="ActorName" name="actorname" onChange={this.handleChange}></input>
                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">image-url</label>
                                <input type="text" className="form-control" value={this.state.image_url} placeholder="image-url" name="image_url" onChange={this.handleChange}></input>
                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Description</label>
                                <input type="text" className="form-control" value={this.state.desc} placeholder="description" name="desc" onChange={this.handleChange}></input>
                
                            </div>
                            <div className="form-group">
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                          </form>
            </div>
        </section>
        )
    } 
}
const mapActorStateProps = (state) => {
    return {
        actors:state.actors
    }
}
const mapDispactActorProps = {addMovies};

export default connect(mapActorStateProps,mapDispactActorProps)(AddMovieForm);