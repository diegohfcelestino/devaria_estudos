import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// export default function Botao() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Olá mundo!</Text>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

const Botao = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.container}>{props.texto} </Text>
    </TouchableOpacity>
  );
};



export default Botao;