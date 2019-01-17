import React, { Component } from 'react';
import '../../footer.css';

class WebFooter extends Component {
    render() {
        return (
            <footer className='footer-container'>
               <div className='footer-logo'>
                    <img src='./images/weblogo-01.png' alt="weblogo" />
               </div>
               <div className='footer-menu'>
                <h3>Contact details :-</h3>
                <p>Phone no : 8387076198</p>
                <p>Email : tarunharsh2017@gmail.com</p>
               </div>
            </footer>
        )
    }
}
export default WebFooter;