import React, { useEffect, useState } from 'react';
import '../Style/header.css';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../Reducer/MovieSlice';
import { fetchSeries } from '../Reducer/MovieSlice';
import { Link } from 'react-router-dom';
const Header = () => {
    const[term,setTerm]=useState("");
    const dispatch=useDispatch();


    const defaultTerm1='harry';
    const defaultTerm2='Friends';
    useEffect(()=>{
      dispatch(fetchMovie(defaultTerm1));
      dispatch(fetchSeries(defaultTerm2));
    },[])


const HandelSubmit=(e)=>{
  e.preventDefault();
  dispatch(fetchMovie(term));
  dispatch(fetchSeries(term));
}
    return (
        <div className="Header">
          <Link to='/'>
          <div className='titre' >Netflex</div>
          </Link>

          <div className="search" >
            <form  onSubmit={HandelSubmit} >
              <input type="text" placeholder='search for a movie' onChange={(e)=>setTerm(e.target.value)} />
              <button><i className="fa fa-search"/></button>           
            </form>
          </div>
              <div className="logo">
              <i className="fa-solid fa-user"></i>
              </div>
        </div>
      );
}
 
export default Header;