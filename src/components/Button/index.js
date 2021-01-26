import React from 'react';

import Styles from './styles';

const Button = ({label}) => {
  return (
    <Styles.Container>
      <Styles.ContainerText>{label}</Styles.ContainerText>
    </Styles.Container>
  );
};

export default Button;
