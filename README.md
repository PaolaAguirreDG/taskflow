## ✅ Módulo 07 – Firebase: Autenticación y Persistencia

En este módulo se integró **Firebase** a TaskFlow para incorporar autenticación de usuarios y persistencia de tareas en la nube.

### 🔐 Autenticación

La aplicación utiliza **Firebase Authentication** mediante email y contraseña.

Se implementaron los siguientes flujos:

* Registro de nuevos usuarios mediante `createUserWithEmailAndPassword`.
* Inicio de sesión mediante `signInWithEmailAndPassword`.
* Cierre de sesión mediante `signOut`.
* Persistencia de sesión utilizando `AsyncStorage`.
* Recuperación automática del usuario mediante `onAuthStateChanged`.
* Navegación protegida: los usuarios no autenticados acceden al flujo de Login/Register y los usuarios autenticados acceden a la aplicación.

El usuario autenticado también se almacena en Redux para que su información esté disponible en toda la aplicación.

### ☁️ Persistencia con Cloud Firestore

Las tareas dejaron de almacenarse únicamente de forma local y ahora se guardan en una colección `tasks` de **Cloud Firestore**.

Cada tarea contiene el `userId` correspondiente al usuario autenticado, permitiendo asociar los datos a su propietario.

Se implementaron las siguientes operaciones:

* Crear nuevas tareas.
* Obtener las tareas del usuario autenticado.
* Actualizar su estado entre pendiente y completada.
* Eliminar tareas.
* Escuchar cambios en tiempo real mediante `onSnapshot`.

Las consultas a Firestore se filtran por `userId`, de manera que cada usuario visualiza únicamente sus propias tareas.

Los datos obtenidos desde Firestore se sincronizan con el store de **Redux Toolkit**, manteniendo el funcionamiento de los filtros, contadores y estadísticas de tareas.

### 🧪 Pruebas realizadas

Para verificar el flujo de autenticación se realizaron las siguientes pruebas:

1. Registro de un nuevo usuario desde la pantalla de registro.
2. Acceso automático a la aplicación después del registro.
3. Cierre de sesión y posterior inicio de sesión con el usuario creado.
4. Intento de inicio de sesión con credenciales incorrectas para comprobar la visualización del mensaje de error.
5. Cierre y reapertura de la aplicación para comprobar que la sesión permanece activa.

Para verificar la persistencia de tareas:

1. Se creó una nueva tarea desde TaskFlow.
2. Se comprobó su aparición en la colección `tasks` de Firebase Firestore.
3. Se verificó que el documento contenga el `userId` del usuario autenticado.
4. Se modificó el estado de una tarea y se comprobó su actualización en Firestore.
5. Se eliminó una tarea y se verificó su eliminación de la base de datos.
6. Se comprobó que la lista de la aplicación se actualice automáticamente mediante el listener en tiempo real.
7. Se utilizaron diferentes usuarios para comprobar que cada uno visualice únicamente sus propias tareas.

### 🔧 Tecnologías incorporadas

* Firebase Authentication
* Cloud Firestore
* AsyncStorage
* Redux Toolkit
* React Redux

Con esta implementación, TaskFlow cuenta con autenticación, persistencia de sesión y almacenamiento de tareas en la nube asociado individualmente a cada usuario.
