import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import {Headerinput} from '../components/styled';



class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: {
                text: '',
                type: ''
            }
        }
    }

    searchMovies = () => {
        let searchInput = document.querySelector('.searchItem');
        let selectType = document.querySelector('select');
        this.setState({search: {text: searchInput.value.trim(),type: selectType.value}})
    }
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'black',borderBottom: '1px solid darkred'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >Movies</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li><NavLink to="/all-movies" style={{color: '#fff'}} activeClassName="text-danger" className="text-decoration-none" >Movies</NavLink></li>
                            <li><NavLink to="/tv-shows" style={{color: '#fff'}} activeClassName="text-danger" className="text-decoration-none ms-3" >Tv Shows</NavLink></li>
                        </ul>
                        <div className="d-flex" >
                            <Headerinput onChange={this.searchMovies} 
                            className="form-control searchItem me-2 bg-dark text-light " 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" />
                            <select onChange={this.searchMovies} className="search-type">
                                <option value="movie">Movies</option>
                                <option value="tv">Tv Shows</option>
                            </select>
                            <Link to={{
                                pathname:'/search',
                                state: this.state.search
                            }} onClick={() => window.location.pathname = `/search`}
                                style={{cursor: 'pointer'}} 
                                className="btn btn-dark ms-3">Search</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}




export default Header;
