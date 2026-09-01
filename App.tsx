import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import TabNavigator from './src/navigation/TabNavigation'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/store'

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <TabNavigator/>
      </SafeAreaView>
    </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({

  safe: {
    flex: 1
  },
})