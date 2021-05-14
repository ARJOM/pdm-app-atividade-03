import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';
import api from './services/api';

const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [senha, onChangeSenha] = useState('');

  const handleLogin = () => {
    const data = {email, password: senha};
    console.log(data);
    api
      .post('login', data)
      .then(res => {
        // TODO passar o token para o context
        console.log(res.data.token);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder={'Email'}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        placeholder={'Senha'}
        onChangeText={onChangeSenha}
        value={senha}
        secureTextEntry={true}
      />
      <Button title="Entrar" onPress={() => handleLogin()} />
    </View>
  );
};

export default Login;
