# TaskFlow

TaskFlow es una aplicación desarrollada con **React Native, Expo y TypeScript** para la organización y gestión de tareas.

## Estructura del proyecto

El proyecto está organizado dentro de la carpeta `src` en:

* `components`: componentes reutilizables de la aplicación.
* `screens`: pantallas principales de la aplicación.
* `navigation`: configuración de la navegación mediante Stack y Bottom Tabs.
* `assets`: imágenes y recursos.
* `data`: datos utilizados en la aplicación.
* `theme`: colores, espaciados, sombras y estilos generales.
* `types`: tipos de TypeScript.

## Pantallas

### TasksScreen

Pantalla principal de la aplicación. Muestra el listado de tareas utilizando `FlatList` y permite acceder al detalle de cada tarea.

Desde esta pantalla también se puede abrir el formulario para crear una nueva tarea.

### TaskDetailScreen

Pantalla que muestra la información de la tarea seleccionada.

La navegación hacia el detalle se realiza mediante `navigation.navigate()` y los datos de la tarea se reciben a través de `route.params`.

### ProfileScreen

Pantalla de perfil del usuario. Muestra información personal y datos relacionados con las tareas.

## Navegación

La aplicación utiliza **React Navigation** con una estructura de navegación anidada.

### Bottom Tab Navigator

La navegación principal utiliza un `BottomTabNavigator` con dos secciones:

* **Tareas:** contiene el flujo principal de tareas.
* **Perfil:** permite acceder a la pantalla de perfil del usuario.

### Stack Navigator

La sección de tareas utiliza un `NativeStackNavigator` para navegar entre:

* `Tasks`: listado principal de tareas.
* `TaskDetail`: detalle de la tarea seleccionada.

Al seleccionar una tarea se utiliza `navigation.navigate()` para acceder a su detalle pasando la información mediante parámetros.

La navegación permite regresar a la lista manteniendo el flujo de pantallas.

## Creación de tareas

La creación de una nueva tarea se realiza mediante un formulario controlado que se presenta como un **modal** desde la pantalla principal de tareas.

El formulario utiliza estado local para controlar sus campos y permite seleccionar:

* Título.
* Descripción.
* Categoría.
* Fecha de realización.

Después de agregar una tarea, el modal se cierra y el usuario regresa a la lista principal.

## Componentes

* `TaskItem`: muestra la información de cada tarea.
* `TaskForm`: formulario controlado para crear nuevas tareas.
* `EmptyState`: muestra el estado vacío cuando no existen tareas.
* Componentes reutilizables para la interfaz y navegación de la aplicación.

## Tecnologías utilizadas

* React Native
* Expo
* TypeScript
* React Navigation
* Native Stack Navigator
* Bottom Tab Navigator
* FlatList
* React Hooks
* StyleSheet

## Funcionalidades

* Navegación por pestañas entre Tareas y Perfil.
* Navegación mediante Stack entre la lista y el detalle.
* Paso de parámetros entre pantallas.
* Visualización del detalle de una tarea.
* Creación de nuevas tareas mediante un formulario controlado.
* Formulario presentado mediante modal.
* Estado vacío de la lista.
* Interfaz personalizada mediante estilos y tema propio.
