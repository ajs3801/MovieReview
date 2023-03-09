import { useState } from 'react';
import './login.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

// default form-fields
const defaultFormFields = {
  email: '',
  password: '',
}

const Login = () => {
  // useState of formfields (email and password)
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value});
  };

  const handleSubmit = () => {

  };

  const signInWithGoogle = () => {

  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>
        <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>

        <div className="buttons-container">
          <Button type="submit" buttonType='google'>Sign In</Button>
        </div>
      </form>
    </div>
  )
};

export default Login;