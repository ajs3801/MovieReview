import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {/* ...otherProps: Spread Syntax(전개구문) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */}
      <input className="form-input"{...otherProps}/> 
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;