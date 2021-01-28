import React from 'react';

import Styles from './styles';

const Button = ({label, onPress, styleTypes}) => {
  return (
    <Styles.Container onPress={onPress} styleTypes={styleTypes}>
      <Styles.ContainerText styleTypes={styleTypes}>
        {label}
      </Styles.ContainerText>
    </Styles.Container>
  );
};

export default Button;
