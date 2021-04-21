import React, { useEffect, useState } from 'react'
import axios from 'axios';
import configs from '../utils/keys';
import { useLocation, useParams } from 'react-router';
import {Row} from './styled';
import {Link} from 'react-router-dom';

const SimilarMovies = (props) => {
    const [data, setData] = useState([]);
    const location = useLocation();
  
    const fetchSimialrMovies = async() => {
      try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${location.state.id}/similar?api_key=${configs.API_KEY}`);
        setData(data.results);
      }
      catch(err) {
          console.error('Somthing went wrong', err.message)
      }
    }

    useEffect(() => {
        fetchSimialrMovies();
    },[]);

    let sliceData = data.slice(0,4);

    return (
        <div>
            <Row className="d-flex justify-content-center">
                {
                    sliceData.map(item => {
                        return (
                            <Link to={{
                                pathname: '/selectedMovie',
                                state: item
                            }} >
                                <div className="col" style={{maxWidth: '80px'}}>
                                    <img style={{width: '100%'}} src={'https://image.tmdb.org/t/p/w300'+item.poster_path} />
                                    <p className="text-white">{item.title}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default SimilarMovies;