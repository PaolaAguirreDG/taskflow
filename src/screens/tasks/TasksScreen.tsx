import { useCallback } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Task } from '../../types'
import { spacing, colors, screenStyles } from '../../theme'
import TaskItem from '../../components/TaskItem'
import EmptyState from '../../components/EmptyState'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TaskStackParamList } from '../../navigation/types'
import TaskForm from '../../components/TaskForm'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  selectFilteredTasks,
  selectTaskStats,
  toggleTaskStatus,
  selectFilter
} from '../../features/tasks/tasksSlice'
import FilterBar from '../../components/FilterBar'

type NavigationProp = NativeStackNavigationProp<TaskStackParamList, 'Tasks'>

const keyExtractor = (item: Task) => item.id


const TasksScreen = ({navigation}: {navigation: NavigationProp}) => {
  const dispatch = useAppDispatch()

  const tasks = useAppSelector(selectFilteredTasks)
  const { pending, total } = useAppSelector(selectTaskStats)

  const toggleTask = useCallback(
    (id: string) => {
      dispatch(toggleTaskStatus(id))
    },
    [dispatch]
  )

  const renderItem = useCallback(
    ({ item }: { item: Task }) => {
      return <TaskItem task={item} onToggle={toggleTask} onPress={() => navigation.navigate('TaskDetail', { taskId: item.id})} />
    },
    [toggleTask]
  )

  return (
    <View style={screenStyles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>TaskFlow</Text>
          <Text style={styles.appSubtitle}>Listas, formulario y detalle</Text>
        </View>
         <View style={styles.divider} />
        <View style={styles.titleRow}>
          <Text style={styles.title}>Mis tareas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{pending}</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>
          {pending} tareas pendientes de {total}
        </Text>
      </View>
      <FilterBar>

      </FilterBar>
      <FlatList
        data={tasks}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<EmptyState filter={useAppSelector(selectFilter)} />}
        initialNumToRender={8}
        windowSize={7}
        maxToRenderPerBatch={8}
      />
      
      <TaskForm/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.lg
  },
  header: {
    gap: spacing.sm
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.ink
  },
  counter: {
    backgroundColor: colors.backgroundColor,
    minWidth: 32,
    height: 32,
    borderRadius: 16, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm
  },
  counterText: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 15
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted
  },
  listContent: {
    paddingBottom: spacing.xl,
    flexGrow: 1
  },
  brand: {
    fontSize:24,
    fontWeight: '900',
    color: colors.ink,
    letterSpacing: -0.5,
  },
  appSubtitle: {
    fontSize: 14,
    color: colors.muted,
    marginTop: spacing.xs,
  },
    divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm + 2
  },
})

export default TasksScreen