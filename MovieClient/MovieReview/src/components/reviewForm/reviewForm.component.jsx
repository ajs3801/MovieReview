import {Form,Button} from 'react-bootstrap';

// import style file
import './reviewForm.styles.scss';

// import context
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

// import axios HTTP request
import axios from 'axios';

// for icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faThumbsDown);
library.add(faThumbsUp);

const ReviewForm = ({reviews,setReviews,movieId,revText,labelText,defaultValue}) => {
  const { currentUser } = useContext(UserContext);

  // post the review
  const addReview = async (event) =>{
    event.preventDefault();

    const rev = revText.current;

    try {
      const response = await axios.post("/api/v1/reviews",{reviewBody:rev.value,displayName:currentUser.displayName,imdbId:movieId});
      const updatedReviews = [...reviews, {body:rev.value, displayName:currentUser.displayName}];
      rev.value = "";

      setReviews(updatedReviews);
    } catch(err) {
      console.error(err);
    }
  }

  // when user clicked thumbs-up btn
  const handleThumbsUp = () => {

  };

  // when user clicked thumbs-donw btn
  const handleThumbsDown = () => {

  };

  return (
    <div className="form-holder">
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        {
          currentUser ? 
          (
            <div className='btns-container'>
              <Button variant="outline-info" onClick={addReview}>Submit</Button>
              <FontAwesomeIcon className='thumbs-up-icon' onClick={handleThumbsUp} icon="fa-solid fa-thumbs-up" />
              <FontAwesomeIcon className='thumbs-down-icon' onClick={handleThumbsDown} icon="fa-solid fa-thumbs-down" />
            </div>
          ) : (<p>Login or Register first</p>)
        }
      </Form> 
    </div>
  )
}

export default ReviewForm;