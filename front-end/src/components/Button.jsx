import React from 'react';

const Button = ({ name, onClick, disabled, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {name}
    </button>
  );
};

export default Button;
