// import component
import Movie from '../Hero/Movie.component';

// import style file
import './Home.styles.scss';

const Home = ({movies}) => {
  return (
    <div>
      <Movie movies={movies} />
    </div>
  );
};

export default Home;