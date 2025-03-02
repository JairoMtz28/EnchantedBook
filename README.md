# EnchantedBook
**EnchantedBook** es un proyecto de aplicación móvil desarrollado en el framework **Ionic** con **Angular**, el cual sirve como una guía para conocer los diversos encantamientos existentes en el videojuego **Minecraft**.
Su interfaz de tres pantallas permite conocer todos los objetos del juego a los que se les puede aplicar algún encantamiento, así como una lista de todos estos encantamientos y, por último, una descripción del funcionamiento y algunos otros detalles interesantes de estos mismos.

<p align="center">
  <img src="https://github.com/user-attachments/assets/c87612ff-95f2-4ddf-9f67-ec4affd619cd" width="125">

  <img src="https://github.com/user-attachments/assets/9a056e1b-3e6e-488e-b6e7-0ae3907fffda" width="125">
</p>

Este proyecto lo he desarrollado principalmente con la intención de familiarizarme con el **framework**, conocer las funciones que ofrece, las **herramientas** predeterminadas **de interfaz de usuario** que este tiene, además de comprender y poder aplicar la **navegación entre pantallas** tanto de forma sencilla como **con envío de parámetros**.

<p align="center">
  <img src="https://github.com/user-attachments/assets/bd008688-7284-4c67-bf32-8642cc2f819a" width="125">
</p>

La **personalización** de las aplicaciones desarrolladas en **Ionic** me pareció algo muy sencillo de llevar a cabo, puesto que, con conocimientos de **HTML** y **CSS** es suficiente para comenzar a crear una **interfaz de usuario**. De este modo pude aplicarle al proyecto una serie de características como lo son los colores de la interfaz, la tipografía y las imágenes de los objetos.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d7c3ed91-39b7-4488-baa5-f05065ae1897" width="125">

  <img src="https://github.com/user-attachments/assets/b8c27221-b89a-4767-b385-8b2d66ba5140" width="125">
</p>

## Cómo probar la aplicación

Si alguien desea **descargar el proyecto**, tendrá que realizar algunas instalaciones para que este funcione (y contar con Android Studio o Xcode). A continuación, se mostrarán los **pasos detallados** para que cualquier persona pueda **ejecutar el proyecto desde cero**:

### 1. Clonar el repositorio
Lo primero es descargar el proyecto desde GitHub con el siguiente comando: \
`git clone <URL_DEL_REPOSITORIO>`  \
`cd <NOMBRE_DEL_PROYECTO>`

### 2. Instalar Ionic y Angular CLI
Si no tienes instalado Ionic y Angular CLI, debe hacerlo con: \
`npm install -g @ionic/cli` \
`npm install -g @angular/cli`

### 3. Instalar las dependencias del proyecto
Como `node_modules` no está en el repositorio, deben instalarse las dependencias con: \
`npm install`

### 4. Restaurar las plataformas de Capacitor
Como el proyecto se diseñó principalmente para Android, hay que regenerar la carpeta `android`: \
`ionic cap sync` \
`ionic cap add android`

Si se quiere probar la aplicación en iOS tendrá que ejecutar: \
`ionic cap sync` \
`ionic cap add ios`

### 5. Construir el proyecto
Para generar la carpeta www (que contiene la versión compilada de la app), se debe ejecutar: \
`ionic build`

### 6. Abrir el proyecto en Android Studio (si es necesario)
Si el proyecto es para Android, después de sincronizar Capacitor, se puede abrir en Android Studio con: \
`npx cap open android`

Si es para iOS puede abrir el proyecto en Xcode, use: \
`npx cap open ios`

En cualquiera de los 2 casos solamente hará falta ejecutar el proyecto, ya sea en un emulador/simulador o en un teléfono.

### Nota: 
Si lo deseas también puedes probar la aplicación desde el navegador de la computadora ejecutando: \
`ionic serve`
