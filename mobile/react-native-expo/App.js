import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Botao from './src/components/Botao/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá mundo!</Text>
      <Botao onPress={() => { Alert.alert("Clicadoooo"); }} texto={"Cliqueeee"} />
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
