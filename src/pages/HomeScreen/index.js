import React, {useState} from 'react';

import {Image, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Styles from './style';

const HomeScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  function handleOpenPageOfRegisterUser(value) {
    setToggleCheckBox(value);
    console.tron.log(toggleCheckBox);
  }

  return (
    <Styles.Container>
      <Image
        style={styles.imageStyles}
        source={require('../../assets/background-pizza.png')}
      />
      <Styles.Form style={styles.elevationForm}>
        <Styles.Wrapper>
          <Styles.CheckBoxStyle
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(value) => handleOpenPageOfRegisterUser(value)}
          />
          <Styles.ContainerLogin>
            <Styles.ContainerLoginText>Login</Styles.ContainerLoginText>
          </Styles.ContainerLogin>

          <Styles.ContainerRegister>
            <Styles.ContainerRegisterText>
              Register
            </Styles.ContainerRegisterText>
          </Styles.ContainerRegister>
        </Styles.Wrapper>

        <Styles.ContainerInput>
          <Input secureTextEntry={false} placeholder="E-mail" />
          <Input secureTextEntry={true} placeholder="Password" />
        </Styles.ContainerInput>

        <Styles.ForgotPasswordContainer>
          <Text>Forgot your password?</Text>
        </Styles.ForgotPasswordContainer>
        <Button label="Login" />

        <Styles.Or>Or</Styles.Or>

        <Styles.Social>
          <Image source={require('../../assets/fb.png')} />
          <Image source={require('../../assets/gmail.png')} />
          <Image source={require('../../assets/twitter.png')} />
        </Styles.Social>
      </Styles.Form>
    </Styles.Container>
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    width: '100%',
  },
  elevationForm: {
    elevation: 20,
  },
});

export default HomeScreen;
