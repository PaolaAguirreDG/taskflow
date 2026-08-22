import { StyleSheet, View } from 'react-native'
import ProfileCard from '../components/ProfileCard'
import avatar from '../assets/avatar2.webp'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileCard
        name="Paola Aguirre"
        role="Diseñadora Gráfica & UX/UI"
        image={avatar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
})