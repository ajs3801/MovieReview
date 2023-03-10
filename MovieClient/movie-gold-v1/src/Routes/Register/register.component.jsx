// import required dependency
import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import styles
import './register.styles.scss';

// import components
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

// import contexts
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // useContext of userContext
  const { emailPasswordSignup } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // reset the Form fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]:value })
  };

  const handleSubmit = async () => {
    try {
      console.log(displayName, email, password, confirmPassword);
      
      // confirm password
      if (password !== confirmPassword) {
        alert("passwords do not match");
        return;
      }

      const user = await emailPasswordSignup(email, password);

      console.log("SIGN-UP done");
      if (user) {
        console.log("sign-up success");
      } else {
        console.log("ERROR in sign up");
      }
    } catch (error) {
      console.log("ERROR occured");
      alert(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" required onChange={handleChange} name='displayName' value={displayName}/>
        <FormInput label="Email" type="email"required onChange={handleChange} name='email' value={email}/>
        <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
        <FormInput label="Confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
        <Button buttonType='inverted' type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Register;