import React from 'react'

import {useEffect, useRef, useContext} from 'react';
import {useParams} from 'react-router-dom';

// import context
import { UserContext } from '../../contexts/user.context';

// import component
import ReviewForm from '../reviewForm/reviewForm.component';
import ReviewContent from '../review-content/reviewContent.component';
import Rating from '../rating/Rating.component';

// import styles
import './Reviews.styles.scss';

// get the paramter
const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
  const revText = useRef(); // contain review text
  const { currentUser } = useContext(UserContext);

  let params = useParams();
  
  const movieId = params.movieId;

  useEffect(()=>{
    getMovieData(movieId);
  },[])

  return (
    <div className='review-container'>
      <div className='review-title'>
        <h1>Review about {movie?.title}</h1>
      </div>

      <div className='review-content'>
        <div className='review-movie-poster'><img src={movie?.poster} alt="" /></div>
        <div className='review-main-content'>
          <Rating thumbsDown={movie?.thumbsDown} thumbsUp={movie?.thumbsUp} />
          <ReviewForm className="review-form" reviews={reviews} setReviews={setReviews} movieId={movieId} revText={revText} labelText = "Write a Review?" />
          <div className='review-list'>
            {
              reviews?.map((review) => {
                if (review) {
                  return(
                    <ReviewContent key={review?.created} review={review}/>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews