import {Link, useNavigate} from "react-router-dom";

import Button from 'react-bootstrap/Button';

import './MovieInformation.styles.scss';

const MovieInformation = ({title, imdbID}) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className="movie-info-container">
      <div className='title-container'>
        <h1 className="title">{title}</h1>
      </div>
      <div className="movie-review-button-container">
          <Button variant ="info" onClick={() => reviews(imdbID)} >Go to Reviews</Button>
      </div>
    </div>
  );
};

export default MovieInformation;