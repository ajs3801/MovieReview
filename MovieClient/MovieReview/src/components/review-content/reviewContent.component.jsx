import './reviewContent.styles.scss';

const ReviewContent = ({review}) => {
  console.log(review.displayName);

  return (
    <div className='review-content-container'>
      <div className='review-holder'>
        <div className='review-profile'>
          <div className="review-profile-image">{review.displayName[0]}</div>
          <div className='review-displayName'>{review.displayName}</div>
        </div>
        <div className='review-body'>{review.body}</div>
      </div>
    </div>
  )
};

export default ReviewContent;