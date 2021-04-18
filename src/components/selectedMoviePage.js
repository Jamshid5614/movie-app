import React, {Component} from 'react';
import Header from '../containers/header';
import { Row,SectionTitle } from './styled';

const headerOfImgUrl = 'https://image.tmdb.org/t/p/w';

const imgSize = 300;

class ErrorPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedMovieTakenAtThisPlace: {}
        }
    }

    componentDidMount () {
        this.setState({selectedMovieTakenAtThisPlace: JSON.parse(localStorage.getItem('selectedMovie'))});
    }

    render () {

        const {aboutText,backdrop_path,popularity,rating,release_date,title,vote,language,original_title} = this.state.selectedMovieTakenAtThisPlace;

        return (
            <>
                <Header />
                <div className="row m-0 justify-content-center">
                    <div className="col-12">
                        <SectionTitle>Movie Deatils</SectionTitle>
                    </div>
                    <div className="col-11">
                        <div className="row border rounded justify-content-between py-3">
                            <div className="col-sm-12 col-md-4 ">
                                <img src={headerOfImgUrl + imgSize + backdrop_path} />
                            </div>
                            <div className="col-sm-12 col-md-7">
                                <p className="fs-3">{title}</p>
                                <p>
                                    {aboutText}
                                </p>
                                <div className="d-block">
                                    <p className="fw-bold border-bottom py-1 pb-3 ">Release Date: <span className="ms-1 fw-lighter" >{release_date}</span></p>
                                    <p className="fw-bold border-bottom py-1 pb-3 ">Language: <span className="ms-1 fw-lighter" >{language}</span></p>
                                    <p className="fw-bold border-bottom py-1 pb-3 ">Votes: <span className="ms-1 fw-lighter" >{vote}</span></p>
                                    <p className="fw-bold border-bottom py-1 pb-3 ">Popularity: <span className="ms-1 fw-lighter" >{popularity}</span></p>
                                    <p className="fw-bold border-bottom py-1 pb-3 ">Original Title: <span className="ms-1 fw-lighter" >{original_title}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-12">
                        <SectionTitle>Similar Movies</SectionTitle>                      
                    </div>
                    <div className="col-12">
                        {/* Similar Movies map elements in here */}

                    </div>
                </div>
            </>
        )
    }

}




export default ErrorPage;












































