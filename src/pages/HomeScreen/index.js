import React from 'react';

import Button from '../../components/Button';
import {StatusBar} from 'react-native';

import Styles from './styles';

const HomeScreen = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Styles.Container>
        <Styles.Content>
          <Button label="Delivery" />
          <Button label="Withdrawal" styleTypes="withdrawal" />

          <Styles.ButtonContinue colors={['#24AF89', '#0EAB43', '#0EAB43']}>
            <Styles.ButtonContinueText>Continue</Styles.ButtonContinueText>
          </Styles.ButtonContinue>
        </Styles.Content>
      </Styles.Container>
    </>
  );
};

export default HomeScreen;
