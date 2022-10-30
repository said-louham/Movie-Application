import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import SerieCard from "./SerieCard";
import '../Style/ListerMovie.css';
import Slider from "react-slick";
import settings from '../API/Sitings'
const Listermovie = () => {
  const allmovies=useSelector(state=>state.movie.movie);
  const allseries=useSelector(state=>state.movie.series);
//   console.log(allseries)
let  showmovie,showserie=null;
showmovie=
allmovies.Response==='True'?
allmovies.Search.map((movie,index)=>(
        <MovieCard data={movie} key={index} />
)):(<div className="error_movie">can't find your movie</div>);

showserie=
allseries.Response==='True'?
allseries.Search.map((series,index)=>(
        <SerieCard data={series} key={index}/>
)):null;

return ( 
        <div className="ListerMovies">
            <h4> lister movie:</h4>
            <div className="allmovie"><Slider {...settings}>  {showmovie} </Slider> </div>
            <hr className="line"/>
            <h4> Series:</h4>
            <div className="allseries"><Slider {...settings}> {showserie} </Slider> </div>
        </div>
     );
}
 
export default Listermovie;

































