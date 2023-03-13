import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";

// import components
import MovieInformation from '../MovieInformation/MovieInformation.component';

// import style files
import './Movie.styles.scss';

const Movie = ({movies}) => {
  return (
    <div className ='movie-carousel-container'>
      <Carousel>
        {
            movies?.map((movie) =>{
                return(
                    <Paper key={movie.imdbId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>

                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <div className='play-trailer-button'>
                                                    <FontAwesomeIcon className="play-button-icon"
                                                        icon = {faCirclePlay}
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MovieInformation title={movie.title} imdbID={movie.imdbId} />
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Movie;