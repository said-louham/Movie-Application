import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import MovieDtail from './Components/MovieDtail';
import PageNotFound from './Components/PageNotFound';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Counter from './Test';
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
                <Route path="/" exact  element={<Home/>} />
                  <Route path='/movies/:imdbID' element={<MovieDtail/>}/>
                  <Route path="*" element={<PageNotFound/>}/>
                  </Routes>
  
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
