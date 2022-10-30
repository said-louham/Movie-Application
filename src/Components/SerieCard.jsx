import React from 'react';
import { Link } from 'react-router-dom';
const SerieCard = ({data}) => {

    return (  
    <Link to={`/movies/${data.imdbID}`}>

        <div className="seiers-card">
             <div className="serie-img"><img src={data.Poster} alt="" /></div>
             <div className="series-info">
                <div className="title">{data.Title}</div>
                <div className="year">{data.Year}</div>
             </div>
       
        </div>
        </Link>
    );
}
 
export default SerieCard;