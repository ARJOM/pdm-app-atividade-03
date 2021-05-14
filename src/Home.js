import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import api from './services/api';
import {getId, getToken} from './services/persistToken';

const Home = ({navigation, route}) => {
  const [discente, setDiscente] = useState({});

  useEffect(() => {
    getToken().then(res => {
      getId().then(r => {
        api
          .get(`discentes/id=${r}`, {headers: {'x-access-token': res}})
          .then(result => {
            setDiscente(result.data);
          });
      });
    });
  }, []);
  return (
    <View>
      <Text>Bem vindo {discente.name}!</Text>
      <Text>Nome: {discente.name}</Text>
      <Text>Email: {discente.email}</Text>
      <Text>Disciplinas:</Text>
      <FlatList
        data={discente.subjects}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              title="+info"
              onPress={() =>
                navigation.navigate('Disciplina', {disciplina: item})
              }
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
