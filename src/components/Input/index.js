import React from 'react';

import Styles from './styles';

const Input = ({secureTextEntry, placeholder}) => {
  return (
    <Styles.Container
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
