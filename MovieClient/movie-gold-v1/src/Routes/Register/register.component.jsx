import { useState } from 'react';

import './register.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // reset the Form fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormFields({ ...formFields, [name]:value })

    console.log(displayName, email, password, confirmPassword);
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