import './reviewContent.styles.scss';

const ReviewContent = ({review}) => {
  console.log(review.displayName);

  return (
    <div className='review-content-container'>
      <div className='review-profile'></div>
      <div className='review-body'>{review.body}</div>
    </div>
  )
};

export default ReviewContent;