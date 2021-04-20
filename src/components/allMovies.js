import React, {Component} from 'react';
import {Link,useLocation} from 'react-router-dom';
import Header from '../containers/header';
import {Row,SectionTitle} from './styled';
import axios from 'axios';


const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c93f9215f2085cf5f8aa18a05afa9861';

const headerOfImgUrl = 'https://image.tmdb.org/t/p/w';

const imgSize = 300;


class AllMovies extends Component {

    constructor (props) {
        super(props)
        this.state = {
            pageNum: 1,
            total_pages: 0,
            result: [],
            backdrop_path: '',
            onChangeNum: 1,
        }
    }

    componentDidMount () {
        this.getFilmsFromServer();
    }
    
    getFilmsFromServer = () => {

        const {sliderElements,result} = this.state;
        
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=c93f9215f2085cf5f8aa18a05afa9861&page=${this.state.onChangeNum}`)
        .then(res => this.setState({pageNum: res.data.page,total_pages: res.data.total_pages,result: res.data.results}))   
    }
    
    goToPage = (e) => {
        e.preventDefault();
        this.setState({pageNum: document.querySelector('#pageNumber').value});
        this.getFilmsFromServer();
    }
    
    onCHangeInputValue = () => {
        if(document.querySelector('#pageNumber').value < 1){
            
        } else {
            this.setState({onChangeNum: JSON.parse(document.querySelector('#pageNumber').value)})
        }
    }

    
    render () {
    
        const {result} = this.state;

        return (
            <>
                <Header />
                <SectionTitle>Browse Popular Movies</SectionTitle>
                <Row>

                    {
                        result.map(item=>{
                            if(item.backdrop_path == null) {
                                return (
                                    <div className="col">
                                        <Link to={{
                                            pathname:"/selectedMovie",
                                            state: item
                                        }} >
                                            <div className="img-content">
                                                <img src={`https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg`} />
                                            </div>
                                            <div className="card-body">
                                                {item.title}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="col">
                                        <Link to={{
                                            pathname:"/selectedMovie",
                                            state: item
                                        }} >
                                            <div className="img-content">
                                                <img src={`${headerOfImgUrl}${imgSize}${item.backdrop_path}`} />
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
                <div className="footer row text-center px-4 pb-4 pt-3 m-0 d-flex justify-content-between align-items-center">
                    <div className="col-sm-12 py-3 col-md-6 d-flex justify-content-between">
                        <span className="bg-danger text-white px-3 fs-5 fw-bold">{this.state.total_pages} pages</span>
                        <span className="rounded-pill fw-bold text-white bg-success px-3">{this.state.onChangeNum}</span>
                    </div>
                    <div className="col-sm-12 py-3 col-md-6">
                        <div className="d-flex align-items-center"  >
                            <p className="text-dark m-0 me-3" style={{whiteSpace: 'nowrap'}} >Page #</p>
                            <input type="number" name="page-number" defaultValue={this.state.pageNum} className="form-control me-2" id="pageNumber" onChange={this.onCHangeInputValue} />
                            <a style={{cursor: 'pointer'}} className="btn btn-secondary" onClick={this.goToPage} >Go</a>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }

}




export default AllMovies;


















