import Hero from '../Hero/Hero';

const Home = ({movies}) => {
  console.log("ERROR in Home");
  console.log(movies);
  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
};

export default Home;