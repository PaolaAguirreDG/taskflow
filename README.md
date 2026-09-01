# TaskFlow 📋

TaskFlow es una aplicación móvil de gestión de tareas desarrollada con **React Native, Expo y TypeScript**.

La aplicación permite crear, visualizar, filtrar, completar y eliminar tareas, utilizando **Redux Toolkit** para administrar el estado global y mantener la información sincronizada entre las distintas pantallas.

## 🚀 Tecnologías utilizadas

* React Native
* Expo
* TypeScript
* React Navigation
* Redux Toolkit
* React Redux

## 📱 Funcionalidades

* Visualización de tareas mediante una lista.
* Creación de nuevas tareas.
* Clasificación de tareas por categoría.
* Asignación de fechas.
* Navegación hacia el detalle de cada tarea.
* Cambio de estado entre pendiente y completada.
* Eliminación de tareas.
* Filtrado por:

  * Todas
  * Pendientes
  * Completadas
* Perfil de usuario.
* Navegación mediante Stack Navigator y Bottom Tab Navigator.
* Estado global sincronizado mediante Redux Toolkit.

## 🗂️ Estado global con Redux Toolkit

TaskFlow utiliza **Redux Toolkit** para centralizar el estado de las tareas.

De esta manera, las diferentes pantallas acceden a la misma información y los cambios realizados en una tarea se reflejan automáticamente en toda la aplicación.

La configuración de Redux se encuentra organizada principalmente en:

* `src/store`: configuración del Store y hooks tipados.
* `src/features/tasks/tasksSlice.ts`: Slice encargado del estado, reducers, acciones y selectores de las tareas.

El componente principal de la aplicación se encuentra envuelto con `Provider`, permitiendo que las pantallas y componentes tengan acceso al Store.

## ⚙️ Acciones implementadas

El Slice de tareas incluye las siguientes acciones:

### `addTask`

Agrega una nueva tarea al estado global y genera automáticamente un identificador único mediante `nanoid()`.

### `toggleTaskStatus`

Permite cambiar el estado de una tarea entre completada y pendiente utilizando su ID.

### `deleteTask`

Elimina una tarea del estado global.

### `setFilter`

Modifica el filtro seleccionado para mostrar todas las tareas, únicamente las pendientes o únicamente las completadas.

## 🔎 Selectores

La aplicación utiliza selectores para acceder a la información almacenada en Redux.

Entre ellos se encuentran selectores para:

* Obtener todas las tareas.
* Obtener las tareas filtradas.
* Obtener el filtro seleccionado.
* Buscar una tarea mediante su ID.
* Obtener estadísticas de tareas completadas y pendientes.

El filtrado de tareas se realiza mediante `selectFilteredTasks`, permitiendo mantener esta lógica dentro de Redux y evitando duplicarla en los componentes.

## 🔄 Sincronización entre pantallas

Al abrir el detalle de una tarea, la aplicación utiliza su ID para obtener la información directamente desde el Store.

Cuando una tarea se marca como completada o pendiente desde la pantalla de detalle, Redux actualiza el estado global.

Al regresar a la lista principal, el cambio se refleja automáticamente sin necesidad de mantener copias locales de las tareas.

## 🎯 Filtros persistentes

El filtro seleccionado también forma parte del estado global de Redux.

Por este motivo, al seleccionar por ejemplo **Pendientes** y navegar hacia otra sección de la aplicación, el filtro permanece seleccionado al regresar a la pantalla de tareas.

## 🧭 Navegación

La aplicación utiliza **React Navigation** combinando:

* Native Stack Navigator
* Bottom Tab Navigator

Esto permite organizar el flujo entre la lista de tareas, el detalle de cada tarea y el perfil del usuario.

## 📂 Estructura principal

```text
src/
├── assets/
├── components/
├── data/
├── features/
│   └── tasks/
│       └── tasksSlice.ts
├── navigation/
├── screens/
│   ├── profile/
│   └── tasks/
├── store/
│   ├── hooks.ts
│   └── index.ts
├── theme/
└── types/
```

## 📦 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/PaolaAguirreDG/taskflow.git
```

Ingresar al proyecto:

```bash
cd taskflow
```

Instalar las dependencias:

```bash
npm install
```

Iniciar Expo:

```bash
npx expo start
```

## 📚 Dependencias principales

Para la gestión del estado global se utilizan:

```text
@reduxjs/toolkit
react-redux
```

Para la navegación se utiliza React Navigation.

## ✅ Módulo 06 – Redux Toolkit

En este módulo se realizó la migración del manejo de tareas hacia un estado global utilizando Redux Toolkit.

Se implementaron:

* Store centralizado.
* Provider de Redux.
* Slice de tareas.
* Acción para agregar tareas.
* Acción para completar y descompletar tareas.
* Acción para eliminar tareas.
* Acción para modificar filtros.
* Selectores para acceder y filtrar el estado.
* Integración de Redux con la lista de tareas.
* Integración de Redux con el formulario.
* Integración de Redux con la pantalla de detalle.
* Persistencia del filtro durante la navegación.
* Sincronización del estado entre las diferentes pantallas.

## 👩‍💻 Autora

**Paola Aguirre**

Proyecto desarrollado como parte del curso de **Desarrollo de Aplicaciones**.
