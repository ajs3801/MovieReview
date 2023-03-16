import React from 'react'

import {useEffect, useRef, useContext} from 'react';
import {useParams} from 'react-router-dom';

// import context
import { UserContext } from '../../contexts/user.context';

// import axios HTTP request
import axios from 'axios';

// import component
import ReviewForm from '../reviewForm/reviewForm.component';
import ReviewContent from '../review-content/reviewContent.component';

// import styles
import './Reviews.styles.scss';

// get the paramter
const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
  //
  const revText = useRef(); // contain review text
  const { currentUser } = useContext(UserContext);

  let params = useParams();
  
  const movieId = params.movieId;

  useEffect(()=>{
    getMovieData(movieId);
  },[])

  // post the review
  const addReview = async (event) =>{
    event.preventDefault();

    const rev = revText.current;

    try {
      const response = await axios.post("/api/v1/reviews",{reviewBody:rev.value,displayName:currentUser.displayName,imdbId:movieId});
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
                  <ReviewContent key={review.id.timestamp} review={review}/>
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