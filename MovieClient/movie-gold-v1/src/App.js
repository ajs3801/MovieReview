import logo from './logo.svg';
import './App.css';
// import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [movie,setMoives] = useState();

  const getMovies = async () => {
    try{
      const response = await axios.get("/api/v1/movies");
      console.log(response.data);

      setMoives(response.data);
    }catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
