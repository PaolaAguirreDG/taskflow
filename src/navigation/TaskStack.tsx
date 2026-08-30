import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TasksScreen from '../screens/tasks/TasksScreen'
import TaskDetailScreen from '../screens/tasks/TaskDetailScreen'

import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const TaskStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Tasks"
                component={TasksScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="TaskDetail"
                component={TaskDetailScreen}
                options={{
                    title:"Detalles de la tarea"
                }}
                />
        </Stack.Navigator>
    )
}

export default TaskStack