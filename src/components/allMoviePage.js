import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Switch,NavLink} from 'react-router-dom';
import Header from '../containers/header';
import axios from 'axios'; 
import { Row,SectionTitle } from './styled';
import Slider from 'react-slick';
import { getDefaultNormalizer } from '@testing-library/dom';


const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c93f9215f2085cf5f8aa18a05afa9861';

const headerOfImgUrl = 'https://image.tmdb.org/t/p/w';

const imgSize = 300;

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
        }
    }

    componentDidMount () {
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


    goToMoviePage = (item) => {    
        console.log(item)

            this.setState
            (
                {
                    selectedItem: {
                        backdrop_path: item.poster_path,
                        title: item.title,
                        aboutText: item.overview,
                        popularity: item.popularity,
                        release_date: item.release_date,
                        vote: item.vote_count,
                        rating: item.vote_average,
                        language: item.original_language,
                        original_title: item.original_title,
                    }
                },
            )
            

            
            localStorage.setItem('selectedMovie',JSON.stringify(this.state.selectedItem))
            
            
            if (JSON.parse(localStorage.getItem('selectedMovie')).title !== '') {
                this.props.history.push('/selectedMovie');
            }
        
        

    }

            
    render () {

        
        const {pageNum,total_pages,result} = this.state;
        
        const setting = {
            dots: true,
            // infinite: true,
            // speed: 500,
            // slidesToShow: 1,
            // slidesToScroll: 1
        }
        

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
                                        <Link  onClick={()=>this.goToMoviePage(item)} >
                                            <div className="img-content">
                                                <img src={"https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg"} />
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
                                        <a  onClick={()=>this.goToMoviePage(item)} >
                                            <div className="img-content">
                                                <img src={headerOfImgUrl + imgSize + item.backdrop_path} />
                                            </div>
                                            <div className="card-body">
                                                {item.title}
                                            </div>
                                        </a>
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
















































































































