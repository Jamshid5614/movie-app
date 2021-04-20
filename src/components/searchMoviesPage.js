import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../containers/header';
import axios from 'axios';
import {Col, SectionTitle,Row} from './styled';


const headerOfImgUrl = 'https://image.tmdb.org/t/p/w';

const imgSize = 200;


class resultFromSearching extends Component {
    constructor (props) {
        super(props);
        this.state = {
            search: {
                text: '',
                type: ''
            },
            pageNum: 1,
            onChangeNum: 1,
            total_pages: 0,
            searchResultFromServer: [],
            selectedItem: {
                backdrop_path: '',
                title: '',
                aboutText: '',
                popularity: '',
                release_date: '',
                vote: '',
                rating: ''
            }
        }
    }

    componentDidMount () {
        let searchResult = this.props.location.state;
        console.log(searchResult);
        this.setState({search: {text: this.props.location.state.text,type: this.props.location.state.type}})
            axios(`https://api.themoviedb.org/3/search/${this.props.location.state.type}?api_key=c93f9215f2085cf5f8aa18a05afa9861&query=${
		    	this.props.location.state.text
		    }&page=${this.state.pageNum}`
            ).then(res => this.setState({
                pageNum: res.data.page,
                total_pages: res.data.total_pages,
                searchResultFromServer: res.data.results,
            }))
            .catch(err => console.error(err))
        
    }

    getFilmsFromServer = () => {
        if(this.state.search.type == 'movie'){
            axios(`https://api.themoviedb.org/3/search/movie?api_key=c93f9215f2085cf5f8aa18a05afa9861&query=${this.state.pageNum}`)
            .then(res => this.setState({pageNum: res.data.page,total_pages: res.data.total_pages,searchResultFromServer: res.data.results}))   
        } else {
            axios(`https://api.themoviedb.org/3/search/tv?api_key=c93f9215f2085cf5f8aa18a05afa9861&query=${this.state.pageNum}`)
            .then(res => this.setState({pageNum: res.data.page,total_pages: res.data.total_pages,searchResultFromServer: res.data.results}))
        }        
    }

    onCHangeInputValue = () => {
        if(document.querySelector('#pageNumber').value < 1){
            
        } else {
            this.setState({onChangeNum: JSON.parse(document.querySelector('#pageNumber').value)})
        }
    }

    goToPage = (e) => {
        e.preventDefault();
        this.setState({pageNum: document.querySelector('#pageNumber').value});
            axios(`https://api.themoviedb.org/3/search/${this.props.location.state.type}?api_key=c93f9215f2085cf5f8aa18a05afa9861&query=${
				this.state.search.text
			}&page=${document.querySelector('#pageNumber').value}`)
            .then(res => this.setState({total_pages: res.data.total_pages,searchResultFromServer: res.data.results}))
            .catch(err => console.error(err))

    }

    render () {

        const {searchResultFromServer} = this.state;

        if (this.state.search.type == 'tv') {
            return (
                <>
                    <Header />
                    <Row className="row m-0 justify-content-center">
                        <div className="col-12">
                            <SectionTitle>Search Results</SectionTitle>
                        </div>
                        {   
                            searchResultFromServer.map(item => {
                                if(item.poster_path == null){
                                    return (
                                        <Link style={{color: '#333',textDecoration: 'none'}} to={{
                                            pathname:"/selectedMovie",
                                            state: item
                                        }} className="col-11 my-2" >
                                            <div className="row justify-content-center m-0">
                                                <div className="col-sm-10 col-md-2">
                                                    <img style={{minHeight: '150px'}} className="w-100" src={'https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg'} />
                                                </div>
                                                <div className="col-sm-12 col-md-10 my-2">
                                                    <p className=" h4 mb-2 text-white">{item.title}</p>
                                                    <p className=" fs-6 mb-3 text-white " style={{fontWeight: '600'}}><span className="bg-warning p-1 ">IMDb {item.vote_average}</span> {item.first_air_date ? item.first_air_date.slice(0,4) : 'none'}</p>
                                                    <div className="text-white" style={{maxHeight: '100px',maxWidth: '100%',overflow: 'hidden',textOverflow: 'ellipsis'}} >{item.overview}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <Link style={{color: '#333',textDecoration: 'none'}} to={{
                                            pathname:"/selectedMovie",
                                            state: item
                                        }} className="col-11 my-2" >
                                            <div className="row justify-content-center m-0">
                                                <div className="col-sm-10 col-md-2">
                                                    <img style={{minHeight: '150px'}} className="w-100" src={headerOfImgUrl + imgSize + item.poster_path} />
                                                </div>
                                                <div className="col-sm-12 col-md-10 my-2">
                                                    <p className=" h4 mb-2 text-white">{item.title}</p>
                                                    <p className=" fs-6 mb-3 text-white" style={{fontWeight: '600'}}><span className="bg-warning p-1 ">IMDb {item.vote_average}</span> | {item.first_air_date ? item.first_air_date.slice(0,4) : 'none'}</p>
                                                    <div className="text-white" style={{maxHeight: '100px',maxWidth: '100%',overflow: 'hidden',textOverflow: 'ellipsis'}} >{item.overview}</div>
                                                </div>
                                            </div>
                                        </Link>
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
                            <div className="d-flex align-items-center" >
                                <p className="text-dark m-0 me-3" style={{whiteSpace: 'nowrap'}} >Page #</p>
                                <input type="number" name="page-number" defaultValue={this.state.pageNum} className="form-control me-2" id="pageNumber" onChange={this.onCHangeInputValue} />
                                <button className="btn btn-secondary" onClick={this.goToPage} >Go</button>
                            </div>
                        </div>
                    </div>
                
                </>
            )
        } else {    
            return (
                <>
                    <Header />
                    
                    <Row className="row m-0 justify-content-center">
                        {   
                            searchResultFromServer.map(item => {
                                if(item.poster_path == null){
                                    return (
                                        <Link style={{color: '#333',textDecoration: 'none'}} to={{
                                            pathname:"/selectedMovie",
                                            state: item
                                        }} className="col-11 my-2" >
                                            <div className="row justify-content-center m-0">
                                                <div className="col-sm-10 col-md-2">
                                                    <img style={{minHeight: '150px'}} className="w-100" src={'https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg'} />
                                                </div>
                                                <div className="col-sm-12 col-md-10 my-2">
                                                    <p className=" h4 mb-2">{item.title}</p>
                                                    <p className=" fs-6 mb-3 " style={{fontWeight: '600'}}><span className="bg-warning p-1 ">IMDb {item.vote_average}</span> | {item.release_date.slice(0,4)}</p>
                                                    <div style={{maxHeight: '100px',maxWidth: '100%',overflow: 'hidden',textOverflow: 'ellipsis'}} >{item.overview}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                } else {
                                    return (
                                        <Link style={{color: '#333',textDecoration: 'none'}} to={{
                                            pathname:"/selectedMovie",
                                            state: item
                                        }} className="col-11 my-2" >
                                            <div className="row justify-content-center m-0">
                                                <div className="col-sm-10 col-md-2">
                                                    <img style={{minHeight: '150px'}} className="w-100" src={headerOfImgUrl + imgSize + item.poster_path} />
                                                </div>
                                                <div className="col-sm-12 col-md-10 my-2">
                                                    <p className=" h4 mb-2">{item.title}</p>
                                                    <p className=" fs-6 mb-3 " style={{fontWeight: '600'}}><span className="bg-warning p-1 ">IMDb {item.vote_average}</span> | {item.release_date.slice(0,4)}</p>
                                                    <div style={{maxHeight: '100px',maxWidth: '100%',overflow: 'hidden',textOverflow: 'ellipsis'}} >{item.overview}</div>
                                                </div>
                                            </div>
                                        </Link>
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
                            <div className="d-flex align-items-center" >
                                <p className="text-white m-0 me-3" style={{whiteSpace: 'nowrap'}} >Page #</p>
                                <input type="number" name="page-number" defaultValue={this.state.pageNum} className="form-control me-2" id="pageNumber" onChange={this.onCHangeInputValue} />
                                <button className="btn btn-secondary" onClick={this.goToPage} >Go</button>
                            </div>
                        </div>
                    </div>
                
                </>
            )
        }
    }

}






export default resultFromSearching;




























