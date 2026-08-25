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
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 24,
    borderRadius: 24,
    backgroundColor: colors.white,
    elevation: 6
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },

  info: {
    alignItems: 'center'
  },

  name: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primary
  },

  role: {
    marginTop: 6,
    fontSize: 16,
    textAlign: 'center'
  },
})