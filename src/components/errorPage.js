import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../containers/header'; 
import Footer from '../containers/footer'; 
// import video from '../containers/notFoundVideo/';




class ErrorPage extends Component {
    constructor (props) {
        super(props);
        
    }


    render () {
        return (
            <>
                <Header />
                <section className="w-100 d-flex align-items-center
                justify-content-center" 
                style={{height: '80.3vh'}}>
                    <div className="d-block text-center">
                        <svg style={{fontSize: '80px'}} stroke="currentColor" 
                            fill="currentColor" stroke-width="0" 
                            viewBox="0 0 576 512" 
                            id="sign-icon" class="text-danger" height="1em" width="1em" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 
                            512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 
                            23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 
                            416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 
                            46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 
                            6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 
                            11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 
                            0-12.356 5.78-11.981 12.654z">
                            </path>
                        </svg>
                        <h1 className="my-3 text-white">Oops! 404</h1>
                        <h5 className="my-3 text-white">Sorry! The page you are looking for does not exist</h5>
                        <Link to="/" className="btn btn-lg btn-warning">Home Page</Link>
                    </div>
                </section>
            </>
        )
    }

}






export default ErrorPage;
























