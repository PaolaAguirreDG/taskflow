import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, spacing } from '../theme'
import type { TaskFilter } from '../features/tasks/tasksSlice'

type Props = {
  filter?: TaskFilter
}

export default function EmptyState({ filter = 'all' } : Props) {
  const MESSAGES: Record<TaskFilter, string> = {
  all: '¡No tienes tareas!',
  pending: '¡No tienes tareas pendientes!',
  completed: 'No tienes tareas completadas'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🗒️</Text>
      <Text style={styles.title}>{MESSAGES[filter]}</Text>
      <Text style={styles.subtitle}>Empieza por crear una con el botón de abajo.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: spacing.xxl * 2, 
    paddingHorizontal: spacing.xl,
    gap: spacing.sm
  },
  emoji: {
    fontSize: 48,
    marginBottom: spacing.sm
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.ink,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
    textAlign: 'center'
  }
})
