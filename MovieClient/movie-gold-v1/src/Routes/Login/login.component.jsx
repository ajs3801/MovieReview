// import required dependency
import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
  const navigation = useNavigate();
  const location = useLocation();

  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  // useState of formfields (email and password)
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // whenever email or password is changed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value});
  };

  // This function will redirect the user to the 
  // appropriate page once the authentication is done.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  }

  // Since there can be chances that the user is already logged in
  // but whenever the app gets refreshed the user context will become
  // empty. So we are checking if the user is already logged in and
  // if so we are redirecting the user to the home page.
  // Otherwise we will do nothing and let the user to login.
  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        // Redirecting them once fetched.
        redirectNow();
      }
    }
  }

  // This useEffect will run only once when the component is mounted.
  // Hence this is helping us in verifying whether the user is already logged in
  // or not.
  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // try to log-in
  const handleSubmit = async () => {
    try {
      const user = await emailPasswordLogin(email,password);
      if (user) {
        console.log("sign in success");
      } else {
        console.log("cannot login");
      }
    } catch (error) {
      alert(error)
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
          <Button type="submit" buttonType='google' onClick={handleSubmit}>Sign In</Button>
        </div>
      </form>
    </div>
  )
};

export default Login;