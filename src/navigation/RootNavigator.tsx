import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { onAuthStateChanged } from 'firebase/auth'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { auth } from '../config/firebase'
import { colors } from '../theme'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { 
  selectAuthLoading, 
  selectCurrentUser, 
  setUser 
} from '../features/auth/authSlice'

const RootNavigator = () => {
  const dispatch = useAppDispatch()

  const user = useAppSelector(selectCurrentUser)
  const isLoading = useAppSelector(selectAuthLoading)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        )
      } else {
        dispatch(setUser(null))
      }
    })

    return unsubscribe
  }, [dispatch])

  if (isLoading) {
    return (
      <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.canvas
      }}
      >
        <ActivityIndicator
          size="large"
          color={colors.primary}
        />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default RootNavigator