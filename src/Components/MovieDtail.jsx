import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetcheDetailsMOVIE } from '../Reducer/MovieSlice';
import { RemoveSelectedMovie } from '../Reducer/MovieSlice';
import '../Style/movieDetail.css';
const MovieDtail = () => {
    const data=useSelector(state=>state.movie.shows)
    const dispatch=useDispatch();
    const {imdbID}=useParams();
    // console.log('hossin',id)

    useEffect(()=>{
        dispatch(fetcheDetailsMOVIE(imdbID));
        return ()=>{
             dispatch(RemoveSelectedMovie())
            }
        
    },[dispatch,imdbID])
    return ( 
     <div className='movie-container'>
        <div className="left-side"> 
                <h1>{data.Title}</h1>
               <div className="inline">
               <p> Rating: <i className='fa fa-star'/>{data.imdbRating}</p>
                <p>Votes:<i className='fa fa-thumbs-up'/>{data.imdbVotes}</p>
                <p> Run time: <i className='fa fa-film'/>{data.Runtime}</p>
                <p>Year: <i className='fa fa-calendar'/>{data.Year}</p>
               </div>
               <div className="info">
                <div className="movie-plote">{data.Plot}</div>
                <div className="title"> </div>
                <div className="title"> Genre:<span>{data.Genre}</span></div>
                <div className="title"> Writer:<span>{data.Writer}</span></div>
                <div className="title"> Actors: <span>{data.Actors}</span></div>
                <div className="story"> Languages <span>{data.Language}</span></div>
                </div>
                </div>
                <div className="right-side">
                    
                    <img src={data.Poster}  alt="image"/>
                </div>
     </div>
        
     );
}
 
export default MovieDtail;