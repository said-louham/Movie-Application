import React from 'react';
import '../Style/CardMovie.css';
import { Link } from 'react-router-dom';
const MovieCard = ({data}) => {
    return (
    <Link to={`/movies/${data.imdbID}`}>
                <div className='movie'>
                    <div className="picture"><img src={data.Poster} /></div>
                <div className="card-info">
                        <div className="title">{data.Title}</div>
                        <div className="year">{data.Year}</div>
                </div>
                </div>
    </Link>
      );
}
 
export default MovieCard;