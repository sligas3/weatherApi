# weatherApi

Una Api creada para consultar datos del clima.

## Instrucciones

- Clonar el proyecto en donde se desee ejecutar.
- Seguir con la instalación que se provee.

## Endpoints

- /location
  Devuelve un json con la ubicacion actual.

- /current/:city?
  Devuelve un json con la ubicación actual y el clima de la ubicación actual. Se le puede pasar una ciudad como parámetro y devuelve los datos de la misma.

- /forecast/:city?
  Devuelve un json con la ubicación actual y el pronóstico de la ubicación actual. Se le puede pasar una ciudad como parámetro y devuelve los datos de la misma.

### Prerequisitos

- Se necesita tener instalado node.js y npm.

### Instalación

- Ejecutar comando "npm i" desde la terminal para instalar todas las dependencias necesarias.

- Para ejecutar automaticamente el proyecto en entorno de desarrollo, escribir el comando "npm run dev" en la terminal (se debe tener instalado nodemon de manera global),
  de lo contrario ejecutar "npm start".

## Ejecución de test

- Para inicializar la ejecución de los test, escribir el comando "npm run test" en la terminal y se ejecutaran automaticamente.
- Para ejecutar un test en especifico, se debe ejecutar el comando "jest 'ruta'" y en el apartado ruta, reemplazarlo por la ruta donde se encuentra el test sin las comillas.

## Authors

- **Silvio Ligas** - [GitHub](https://github.com/sligas3)
