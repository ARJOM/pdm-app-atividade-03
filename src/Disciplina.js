import React from 'react';
import { Text, View, Button } from 'react-native';
import api from './services/api';
import { getId, getToken } from './services/persistToken';

const Disciplina = ({ navigation, route }) => {
  return (
    <View>
      <Text>Nome da Disciplina: {route.params.disciplina.name}</Text>
      <Text>Carga Horária: {route.params.disciplina.workload}</Text>
    </View>
  );

}

export default Disciplina;