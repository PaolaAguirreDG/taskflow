import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  type task = {
    id: string
    title: String
    done: boolean
    description: string
    time: 'today' | 'tomorrow' | 'week' | 'month'
  }

  const task: task[] = [
    {
      id: '1',
      title: 'Comprar pollo',
      description: 'Ir a la granja a comprar 2 kg de pechuga de pollo',
      time: 'today',
      done: false

    },
    {
      id: '2',
      title: 'Estudiar React Native',
      description: 'Repasar componentes, props y estados durante 2 horas',
      time: 'today',
      done: false
    },
    {
      id: '3',
      title: 'Pagar la factura de internet',
      description: 'Realizar el pago antes de la fecha de vencimiento',
      time: 'today',
      done: false
    },
    {
      id: '4',
      title: 'Hacer ejercicio',
      description: 'Caminar 45 minutos en el parque',
      time: 'today',
      done: false
    },
  ]
  const name = 'Paola Aguirre'

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gretting}>
        <Text style={styles.greattingText}>Hola, buenas noches {name.slice(0, 5)}</Text>
      </View>
      <View style={styles.header}>
          <View style={styles.avatarHeader}></View>
          <View style={{ gap:4 }}>
            <Text style={[ styles.greattingText, { fontWeight: 'bold' }]}>{name}</Text>
            <Text style={{ fontSize: 16}}>Total de tareas: {task.length}</Text>
          </View>
      </View>
      {task.map((task) => {

      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7390a5',
    alignItems: 'center',
    padding: 16,
    gap: 16
  },
  gretting: {
    width: '100%'
  },
  greattingText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  header: {
    width: '100%',
    backgroundColor: '#c0bebe',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    alignItems: 'center'
  },
  avatarHeader: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor:'#7390a5',
  },
});
