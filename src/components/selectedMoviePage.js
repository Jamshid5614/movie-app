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

    
    render () {

        const data = this.props.location.state;

        
        console.log(data);

        const {overview,poster_path,popularity,vote_average,release_date,title,vote_count,original_language,original_title} = data;
        
        if(poster_path == null){
                return (
                    <>
                        <Header />
                        <Row className="row m-0 justify-content-center">
                            <div className="col-12">
                                <SectionTitle>Movie Deatils</SectionTitle>
                            </div>
                            <div className="col-11">
                                <div className="row border rounded justify-content-between py-3">
                                    <div className="col-sm-12 text-center col-md-4 ">
                                        <img style={{maxWidth: '100%'}} src={'https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg'} />
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <p className="fs-3">{title}</p>
                                        <p>
                                            {overview}
                                        </p>
                                        <div className="d-block">
                                            <p className="fw-bold border-bottom py-1 pb-3 ">Release Date: <span className="ms-1 fw-lighter" >{release_date}</span></p>
                                            <p className="fw-bold border-bottom py-1 pb-3 ">Language: <span className="ms-1 fw-lighter" >{original_language}</span></p>
                                            <p className="fw-bold border-bottom py-1 pb-3 ">Votes: <span className="ms-1 fw-lighter" >{vote_average}</span></p>
                                            <p className="fw-bold border-bottom py-1 pb-3 ">Popularity: <span className="ms-1 fw-lighter" >{popularity}</span></p>
                                            <p className="fw-bold border-bottom py-1 pb-3 ">Original Title: <span className="ms-1 fw-lighter" >{original_title}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
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
        } else {
            return (
                <>
                    <Header />
                    <Row className="row m-0 justify-content-center">
                        <div className="col-12">
                            <SectionTitle>Movie Deatils</SectionTitle>
                        </div>
                        <div className="col-11">
                            <div className="row border rounded justify-content-between py-3">
                                <div className="col-sm-12 text-center col-md-4 position-relative">
                                    <img src={headerOfImgUrl + imgSize + poster_path} />
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <p className="fs-3">{title}</p>
                                    <p>
                                        {overview}
                                    </p>
                                    <div className="d-block">
                                        <p className="fw-bold border-bottom py-1 pb-3 ">Release Date: <span className="ms-1 fw-lighter" >{release_date}</span></p>
                                        <p className="fw-bold border-bottom py-1 pb-3 ">Language: <span className="ms-1 fw-lighter" >{original_language}</span></p>
                                        <p className="fw-bold border-bottom py-1 pb-3 ">Votes: <span className="ms-1 fw-lighter" >{vote_average}</span></p>
                                        <p className="fw-bold border-bottom py-1 pb-3 ">Popularity: <span className="ms-1 fw-lighter" >{popularity}</span></p>
                                        <p className="fw-bold border-bottom py-1 pb-3 ">Original Title: <span className="ms-1 fw-lighter" >{original_title}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
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

}




export default ErrorPage;












































