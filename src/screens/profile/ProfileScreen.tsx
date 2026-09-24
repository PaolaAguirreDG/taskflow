import React from 'react'
import { ActivityIndicator, Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'
import { colors, spacing, shadows } from '../../theme'
import { name } from '../../data'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { FILTERS, selectFilter, selectTaskStats } from '../../features/tasks/tasksSlice'
import { selectCurrentUser, selectUserPhoto, setUserPhoto } from '../../features/auth/authSlice'
import { updateUserPhoto } from '../../services/profile/profileService'
import { logout } from '../../services/auth/authService'
import fallbackAvatar from '../../assets/avatarPaola.webp'

const AVATAR_SIZE = 88

const ProfileScreen = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)
  const { total, completed, pending } = useAppSelector(selectTaskStats)
  const filter = useAppSelector(selectFilter)

  const [isSaving, setIsSaving] = useState(false)
  const [coverUri, setCoverUri] = useState<string | null>(null)

  const progress = total === 0 ? 0 : Math.round((completed / total) * 100)

  const userPhoto = useAppSelector(selectUserPhoto)

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert(
        'Permisos requeridos',
        'Necesitamos acceso a tu galería para cambiar la foto de perfil.'
      )
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    })

    if (result.canceled) return

    await savePhoto(result.assets[0].uri)
  }


  const savePhoto = async (photoURI: string) => {
    if (!user) return
    setIsSaving(true)

    try {
      await updateUserPhoto(user.uid, photoURI)
      dispatch(setUserPhoto(photoURI))
    } catch (err) {
      Alert.alert('Error', 'No se pudo actualizar la foto de perfil.')
    } finally {
      setIsSaving(false)
    }
  }
  

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(
        'Error al cerrar sesión:',
        error
      )
    }
  }

  const pickCoverImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [3, 1],
    quality: 0.7,
  })

  if (!result.canceled && result.assets[0]) {
    setCoverUri(result.assets[0].uri)
  }
}


  return (
    <View style={styles.container}>

      <View style={styles.profileCard}>

        <ImageBackground
          source={require('../../assets/profile-bg.webp')}
          style={styles.cover}
          imageStyle={styles.coverImage}
        >
          <View style={styles.overlay} />

          <TouchableOpacity
            style={styles.coverEditButton}
            onPress={pickCoverImage}
            accessibilityLabel="Cambiar imagen de portada"
          >
            <Ionicons name="pencil" size={16} color={colors.white} />
          </TouchableOpacity>
        </ImageBackground>

          <TouchableOpacity 
            style={styles.avatarWrapper} 
            onPress={pickImage} 
            disabled={isSaving}
            activeOpacity={0.8}
          >
            <Image
              source={user?.photoURL ? { uri: user.photoURL } : fallbackAvatar}
              style={styles.avatar}
            />
            {isSaving ? (
              <View style={styles.avatarOverlay}>
                <ActivityIndicator color={colors.surface} />
              </View>
            ) : (
              <View style={styles.avatarBadge}>
                <Ionicons name="camera" size={14} color={colors.surface} />
              </View>
            )}
        </TouchableOpacity>

        <View style={styles.profileContent}>

          <Text style={styles.name}>{name}</Text>

          <Text style={styles.role}>
            Diseñadora Gráfica · UX/UI
          </Text>

          <Text style={styles.description}>
            Organizando mis tareas, proyectos y actividades
            para aprovechar mejor cada día.
          </Text>

          <View style={styles.stats}>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{total}</Text>
              <Text style={styles.statLabel}>Tareas</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{completed}</Text>
              <Text style={styles.statLabel}>Completadas</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{pending}</Text>
              <Text style={styles.statLabel}>Pendientes</Text>
            </View>

          </View>

        </View>

      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mis categorías</Text>

        <View style={styles.categories}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>💼 Trabajo</Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryText}>📚 Estudio</Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryText}>🌱 Personal</Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryText}>🏠 Hogar</Text>
          </View>
        </View>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.sectionTitle}>Progreso semanal</Text>
          <Text style={styles.progressValue}>{progress}%</Text>
        </View>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progress,
              { width: `${progress}%` }
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {completed} de {total} tareas completadas
        </Text>
        <Text style={styles.filterNote}>
          Filtro activo en la lista:{' '}
          <Text style={styles.filterValue}>
            {FILTERS[filter]}
          </Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.lg,
    backgroundColor: colors.canvas
  },

  profileCard: {
    backgroundColor: colors.white,
    borderRadius: 24,
    overflow: 'hidden'
  },

  cover: {
    height: 120,
    position: 'relative'
  },

  coverImage: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: `${colors.primaryDark}70`
  },

  coverEditButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },

  avatarWrapper: {
    position: 'absolute',
    top: 75,              
    left: spacing.lg,
    width: 90,
    height: 90,
    zIndex: 2,
  },

  avatar: {
  width: 90,
  height: 90,
  borderRadius: 45,
  borderWidth: 4,
  borderColor: colors.white,
  boxShadow: shadows.avatarShadow,
  },

  avatarOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  avatarBadge: {
  position: 'absolute',
  right: 0,
  bottom: 0,
  width: 32,
  height: 32,
  borderRadius: 16,
  backgroundColor: colors.primary,
  borderWidth: 3,
  borderColor: colors.white,
  alignItems: 'center',
  justifyContent: 'center',
  },

  profileContent: {
    padding: spacing.lg,
    paddingTop: 55
  },

  name: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.ink
  },

  role: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 4
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
    marginTop: spacing.md
  },

  stats: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.lg
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.category,
    borderRadius: 16,
    paddingVertical: spacing.md,
    alignItems: 'center'
  },

  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.ink
  },

  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4
  },

  section: {
    gap: spacing.md
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.ink
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },

  category: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.category,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },

  categoryText: {
    color: colors.primaryDark,
    fontWeight: '600'
  },

  progressCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacing.lg,
    gap: spacing.md
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  progressValue: {
    color: colors.primary,
    fontWeight: '700'
  },

  progressBackground: {
    height: 8,
    backgroundColor: colors.category,
    borderRadius: 10,
    overflow: 'hidden'
  },

  progress: {
    height: '100%',
    backgroundColor: colors.primary
  },

  progressText: {
    fontSize: 13,
    color: colors.textSecondary
  },
  logoutButton: {
    backgroundColor: colors.canvas,
    borderRadius: 16,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primaryDark
  },

  logoutText: {
    color: colors.primaryDark,
    fontWeight: '800',
    fontSize: 15
  },
  filterNote: {
    fontSize: 12,
    color: colors.textSecondary
  },

  filterValue: {
    fontWeight: '800',
    color: colors.ink
  }
})