import logo from './logo.svg';
import './App.css';

// import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import notFound from './components/notFound/notFound';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [movies,setMoives] = useState();
  const [movie,setMovie] = useState();
  const [reviews,setReviews] = useState();

  const getMovies = async () => {
    try{
      const response = await axios.get("/api/v1/movies");
      console.log(response.data);

      setMoives(response.data);
    }catch(err) {
      console.log("ERROR in getMovies");
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await axios.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch(error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
          <Route path='Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />} ></Route>
          <Route path='*' element={<notFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
