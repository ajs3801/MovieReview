import './reviewContent.styles.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faThumbsDown);
library.add(faThumbsUp);

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

      <div className='review-btns'>
        <FontAwesomeIcon className='thumbs-up-icon' icon="fa-solid fa-thumbs-up" />
        <FontAwesomeIcon className='thumbs-down-icon' icon="fa-solid fa-thumbs-down" />
      </div>
    </div>
  )
};

export default ReviewContent;