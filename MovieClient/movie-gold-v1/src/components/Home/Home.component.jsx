// import component
import Movie from '../Hero/Movie.component';

import { APP_ID } from '../../realm/constants';

// import style file
import './Home.styles.scss';

const Home = ({movies}) => {
  console.log(APP_ID);
  return (
    <div>
      <Movie movies={movies} />
    </div>
  );
};

export default Home;