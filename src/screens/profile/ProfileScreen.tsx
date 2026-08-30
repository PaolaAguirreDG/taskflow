import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { colors, spacing, shadows } from '../../theme'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.profileCard}>

        <ImageBackground
          source={require('../../assets/profile-bg.webp')}
          style={styles.cover}
          imageStyle={styles.coverImage}
        >
          <View style={styles.overlay} />
          <Image
            source={require('../../assets/avatar2.webp')}
            style={styles.avatar}
          />
        </ImageBackground>

        <View style={styles.profileContent}>

          <Text style={styles.name}>Paola Aguirre</Text>

          <Text style={styles.role}>
            Diseñadora Gráfica · UX/UI
          </Text>

          <Text style={styles.description}>
            Organizando mis tareas, proyectos y actividades
            para aprovechar mejor cada día.
          </Text>

          <View style={styles.stats}>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>20</Text>
              <Text style={styles.statLabel}>Tareas</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Hechas</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>12</Text>
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
          <Text style={styles.progressValue}>40%</Text>
        </View>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.progressText}>
          8 de 20 tareas completadas
        </Text>
      </View>

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

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    position: 'absolute',
    left: spacing.lg,
    bottom: -45,
    borderWidth: 4,
    borderColor: colors.white,
    boxShadow: shadows.avatarShadow
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
    width: '40%',
    height: '100%',
    backgroundColor: colors.primary
  },

  progressText: {
    fontSize: 13,
    color: colors.textSecondary
  }
})