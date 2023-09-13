 # Todo List App

 Esta es una aplicación de lista de tareas desarrollada con React Native y Expo. Permite a los usuarios agregar tareas, establecer prioridades y filtrar tareas según su estado y prioridad.

 ## Comenzando

 1. Clone el repositorio:
 ```
 git clone git@github.com:Daniel-Santiago-Acosta-1013/react-native-TodoListApp.git
 ```

 2. Instale las dependencias usando yarn:
 ```
 yarn install
 ```

 3. Asegúrese de tener Expo CLI instalado. Si no lo tiene, instálelo con:
 ```
 yarn global add expo-cli
 ```

 4. Para ejecutar la aplicación en modo de desarrollo, utilice:
 ```
 expo-cli start --tunnel
 ```

 5. Para construir la aplicación para Android en modo de vista previa, use:
 ```
 eas build -p android --profile preview
 ```

 ## Dependencias

 Es posible que necesite instalar algunas dependencias específicas para el proyecto, como @react-native-async-storage/async-storage. Puede hacerlo con:
 ```
 expo install @react-native-async-storage/async-storage
 ```

 ## Estructura del proyecto

 - `App.tsx`: Este archivo contiene la lógica principal de la aplicación, incluida la gestión de tareas y prioridades.
 - `AppStyles.ts`: Este archivo contiene todos los estilos de la aplicación.
 - `types/styles.types.ts`: Define los tipos de estilos utilizados en la aplicación.

 ¡Esperamos que disfrutes trabajando en este proyecto!
