# TaskFlow

TaskFlow es una aplicación desarrollada con React Native, Expo y TypeScript para la organización de tareas.

## Estructura del proyecto

El proyecto está organizado dentro de la carpeta `src` en:

- `components`: componentes reutilizables.
- `screens`: pantallas de la aplicación.
- `assets`: imágenes y recursos.
- `constants`: colores y estilos generales.
- `data`: datos utilizados en la aplicación.
- `types`: tipos de TypeScript.

## Pantallas

### HomeScreen

Pantalla principal de la aplicación. Muestra el encabezado del usuario y el listado de tareas.

### ProfileScreen

Pantalla de perfil del usuario. Utiliza el componente `ProfileCard` para mostrar la imagen, el nombre y el rol mediante props.

## Componentes

- `Header`: muestra la información del usuario.
- `CardTask`: muestra la información de cada tarea.
- `ProfileCard`: muestra la imagen, nombre y rol del usuario.

## Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- StyleSheet