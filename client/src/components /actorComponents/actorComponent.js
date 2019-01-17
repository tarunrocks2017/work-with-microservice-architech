import React from 'react';
import {Link} from 'react-router-dom';

const ActorComponent = (props) => {
    return (
        <div className="data-container">
            <div className="content-image">
                <img src={`./images/${props.actor.image_url}`} alt="content-pic" />
            </div>
            <div className="content-info">
                <h5>{props.actor.actorname}</h5>
            </div>
            <div className="content-info">
                <h5>{props.actor.activeYear}</h5>
            </div>
            <div className="content-info">
                <h5>{props.actor.moviename}</h5>
            </div>
            <div className="content-info">
                <h5>{props.actor.totalmovies}</h5>
            </div>
            <div class='content-info'>
            <Link to={`/actors/edit/${props.actor.actorid}`} ><button class='edit-button btn btn-primary' name={props.actor.actorid} >EDIT</button></Link>
                <button class='delete-button btn' id={props.actor.actorid} onClick={props.deleteMethod}>DELETE</button>
            </div>
        </div>
    )
}

export default ActorComponent;