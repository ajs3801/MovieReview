// import required dependency
import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { browserHistory } from 'react-router';

import { 
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';

// import style file
import './login.styles.scss';

// import componenets
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

// import context
import { UserContext } from '../../contexts/user.context';

// default form-fields
const defaultFormFields = {
  email: '',
  password: '',
}

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // user context
  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  // useState of formfields (email and password)
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // move to home
  const moveToHome = () => {
    navigate("/");
  };

  // reset the form fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields); // set the form fields to default form
  };

  // whenever email or password is changed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value});
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    setCurrentUser(user);
    setCurrentUser(currentUser);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // try to log-in
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // get response
      const { user } = await signInAuthUserWithEmailAndPassword(
        email, 
        password,
      );

      // reset the form fields
      resetFormFields();
      console.log(user);
      alert("login successfully");
      setCurrentUser(user);
      moveToHome();
    } catch(error) {
      switch(error.code) {
        case'auth/wrong-password':
          alert("incorrect password for email");
          break;
        
        case 'auth/user-not-found':
          alert("no user associated with this email");
          break;

        default: // default statement
          console.log(error)
      }

      alert("ERROR");
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>
        <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>

        <div className="buttons-container">
          <Button type="submit" onClick={handleSubmit}>Sign In</Button>
          <Button type="submit" buttonType='google' onClick={logGoogleUser}>Sign in with Google</Button>
        </div>
      </form>
    </div>
  )
};

export default Login;