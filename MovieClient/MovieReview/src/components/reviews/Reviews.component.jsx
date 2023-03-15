import React from 'react'

import {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

// import axios HTTP request
import axios from 'axios';

// import component
import ReviewForm from '../reviewForm/reviewForm.component';

// import styles
import './Reviews.styles.scss';

// get the paramter
const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
  //
  const revText = useRef(); // contain review text
  let params = useParams();
  const movieId = params.movieId;

  useEffect(()=>{
    getMovieData(movieId);
  },[])

  const addReview = async (event) =>{
    event.preventDefault();

    const rev = revText.current;

    try {
      const response = await axios.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});
      const updatedReviews = [...reviews, {body:rev.value}];
      rev.value = "";

      setReviews(updatedReviews);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className='review-container'>
      <div className='review-title'>
        <h1>Review about {movie?.title}</h1>
      </div>

      <div className='review-content'>
        <div className='review-movie-poster'><img src={movie?.poster} alt="" /></div>
        <div className='review-main-content'>
          <ReviewForm className="review-form" handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />
          <div className='review-list'>
            {
              reviews?.map((review) => {
                return(
                  <div key={review.id.timestamp}>
                    <p className='review'>{review.body}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews