import { Image, ImageSourcePropType,  StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants'

type ProfileCardProps = {
  name: string
  role: string
  image: ImageSourcePropType
}

export default function ProfileCard({
  name,
  role,
  image,
}: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '70%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    borderRadius: 30,
    backgroundColor: colors.white,
    elevation: 4
  },

  image: {
    marginTop: 100,
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  info: {
    alignItems: 'center'
  },

  name: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.purple
  },

  role: {
    marginTop: 6,
    fontSize: 16,
    textAlign: 'center'
  },
})