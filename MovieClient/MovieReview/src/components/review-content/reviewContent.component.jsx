import './reviewContent.styles.scss';

const ReviewContent = ({review}) => {
  console.log(review);
  return (
    <div className='review-content-container'>
      <div className='review-holder'>
        <div className='review-profile'>
          {review.displayName ? (
            <div className="review-profile-image">{review.displayName[0]}</div>
          ):(
            <div></div>
          )}
          {review.displayName ? (
            <div className='review-displayName'>{review.displayName}</div>
          ):(
            <div></div>
          )}
        </div>
        <div className='review-body'>{review.body}</div>
      </div>
    </div>
  )
};

export default ReviewContent;