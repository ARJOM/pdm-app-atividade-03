import React from 'react';
import {Text, View, Button } from 'react-native';

const App  = ({ navigation }) => {
    return (
      <View>
        <Text>bem vindo ao App!</Text>

        <Button
          title="Home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
      </View>
    );
}

export default App;
