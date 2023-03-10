import logo from './logo.svg';
import './App.css';

// import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Layout from './components/Layout/Layout.component';
import Home from './components/Home/Home.component';
import Header from './components/header/header.component';
import Trailer from './components/trailer/Trailer.component';
import Reviews from './components/reviews/Reviews.component';
import NotFound from './components/notFound/NotFound.component';
import Login from './Routes/Login/login.component';
import Register from './Routes/Register/register.component';

import { Routes, Route } from 'react-router-dom';

import { UserProvider } from './contexts/user.context';

function App() {
  const [movies,setMoives] = useState();
  const [movie,setMovie] = useState();
  const [reviews,setReviews] = useState();

  const getMovies = async () => {
    try{
      // get the response
      const response = await axios.get("/api/v1/movies");

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
      console.log("ERROR in getMovieData");
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <div className="App">
      <UserProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home movies={movies} />}></Route>
            <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
            <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />} ></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
