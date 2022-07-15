import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Botao from './src/components/Botao/Botao';

export default function App() {
  const [textoBotao, setTextoBotao] = useState(0);
  const lista = [1, 2, 3, 4, 5, 5, 10, 25];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá mundo!</Text>
      <Botao onPress={() => setTextoBotao(textoBotao + 1001)} texto={textoBotao} />
      {
        textoBotao > 0
          ?
          <Botao onPress={() => setTextoBotao(textoBotao - 1001)} texto={"Diminuir"} />
          :
          <Text>Valor mínimo permitido</Text>
      }
      {
        lista.map(item => (
          <Text>{item}</Text>
        ))
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  }
});
