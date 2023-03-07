import { React } from 'react';
import Hero from '../Hero/Hero';

const Home = ({movies}) => {
  console.log("LOG in HOME");
  console.log(movies);
  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
};

export default Home;