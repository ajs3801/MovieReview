import logo from './logo.svg';
import './App.css';

// import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import axios from 'axios';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [movies,setMoives] = useState();

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

  useEffect(() => {
    getMovies();
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
