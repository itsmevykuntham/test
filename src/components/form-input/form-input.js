import React from 'react';

import './form-input.css';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    
  </div>
);

export default FormInput;