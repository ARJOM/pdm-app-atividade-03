import React from 'react';
import {Text, View} from 'react-native';

const Disciplina = ({navigation, route}) => {
  return (
    <View>
      <Text>Nome da Disciplina: {route.params.disciplina.name}</Text>
      <Text>Carga Horária: {route.params.disciplina.workload}</Text>
    </View>
  );
};

export default Disciplina;
