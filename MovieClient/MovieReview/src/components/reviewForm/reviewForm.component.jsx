import {Form,Button} from 'react-bootstrap';

// import style file
import './reviewForm.styles.scss';

// import context
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  const { currentUser } = useContext(UserContext);

  return (
    <Form className="form-container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        {
          currentUser ? (<Button variant="outline-info" onClick={handleSubmit}>Submit</Button>) : (<p>Login or Register first</p>)
        }
    </Form>   

  )
}

export default ReviewForm;