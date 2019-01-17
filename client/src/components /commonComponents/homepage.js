import React, { Component } from 'react';
import '../../home.css';
class HomeContent extends Component {
    render() {
        return (
            <section class="container-fluid">
                <div class="welcome-page-image">
                    <img src="../images/movieWorld-04.jpg" alt=""></img>
                </div>
                <div class="welcome-message-div"></div>
                <div class="welcome-message">
                     <h2>WELCOME TO MOVIE_WORLD</h2>
                </div>
                
            </section>
        )
    }
}

export default HomeContent

