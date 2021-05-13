import React from 'react';
import {Text, View, Button } from 'react-native';

const Home = ({ navigation }) =>  {
    return (
      <View>
        <Text>Bem vindo a Home!</Text>

        <Button
          title="App"
          onPress={() =>
            navigation.navigate('App')
          }
        />
      </View>
    );
}

export default Home;