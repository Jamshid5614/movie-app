import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Switch,NavLink} from 'react-router-dom';
import Header from '../containers/header';
import axios from 'axios'; 
import { Row,SectionTitle } from './styled';
import { getDefaultNormalizer } from '@testing-library/dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c93f9215f2085cf5f8aa18a05afa9861';

const headerOfImgUrl = 'https://image.tmdb.org/t/p/w';

const imgSize = 300;

let emptyArray = [];

class AllMoviesPage extends Component {

    constructor (props) {
        super(props)
        this.state = {
            pageNum: 1,
            total_pages: 0,
            result: [],
            backdrop_path: '',
            selectedItem: {
                backdrop_path: '',
                title: '',
                aboutText: '',
                popularity: '',
                release_date: '',
                vote: '',
                rating: ''
            },
            sliderElements: []
        }
    }
    
    componentDidMount () {
        axios('https://api.themoviedb.org/3/movie/$%7Bid%7D/videos/')
        .then(res => console.log(res))
            .catch(err => console.error(err))
        const {sliderElements,result} = this.state;
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=c93f9215f2085cf5f8aa18a05afa9861&page=${this.state.pageNum}`)
            .then(res => this.setState({pageNum: res.data.page,total_pages: res.data.total_pages,result: res.data.results}))   
            .catch(err => console.error(err))
            this.setState({
            selectedItem: {
                backdrop_path: '',
                title: '',
                aboutText: '',
                popularity: '',
                release_date: '',
                vote: '',
                rating: ''
            } 
        })
        // localStorage.setItem('selectedMovie','');
    }
    
                
        render () {
            
            console.log(this.state.sliderElements);
            
            console.log(this.props);
            console.log(emptyArray);
        
        const {pageNum,total_pages,result} = this.state;
        

        
        return(
            <>

                <Header />

                {/* <Slider {...setting} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXHOERrwdI3BzQVM6nQM8utCcMuyztyeiug&usqp=CAU" alt=""/>
                    <img src="https://truimagesauto.com/assets/img/Photography.jpg" alt=""/>
                    <img src="https://imgd.aeplcdn.com/1056x594/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0&q=85" alt=""/>
                </Slider> */}

                <SectionTitle>Popular Movies</SectionTitle>

                <Row>
                    {
                        result.map(item=>{


                            if (item.backdrop_path == null) {
                                return (
                                    <div className="col" key={item.id} >  
                                        <Link to={{
                                            pathname:"/selectedMovie",
                                            state: item
                                        }}  >
                                            <div className="img-content">
                                                <img src={"https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"} />
                                                <span>{item.vote_average}</span>
                                            </div>
                                            <div className="card-body">
                                                {item.title}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="col" key={item.id} >  
                                        <Link  to={{
                                            pathname:"/selectedMovie",
                                            state: item
                                        }} >
                                            <div className="img-content">
                                                <img src={headerOfImgUrl + imgSize + item.backdrop_path} />
                                                <span>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                    {item.vote_average}
                                                </span>
                                            </div>
                                            <div className="card-body">
                                                {item.title}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        })
                    }
                </Row>
                <div className="footer text-center pb-4 pt-3">
                    <Link to="/all-movies" className="btn btn-danger mx-auto">Load more</Link>
                </div>
            </>
        )

    }

}


export default AllMoviesPage;

















































































































