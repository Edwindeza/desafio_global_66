# desafio_global_66

Este es un proyecto desarrollado para cumplir el Desafio de la empresa Global 66.
Está construido con el framework `Vue 2.6.11`.

## Comenzando 🚀

Para correr este proyecto en local se deben seguir los siguientes pasos:


1. Instalar las dependencias del proyecto con el comando `npm install`.
2. Ejecutar el comando `npm run serve` para que la aplicación se ejecute en el entorno de desarrollo.

## Ejecutando las pruebas ⚙️

Para la ejecución de pruebas automatizadas es necesario ejecutar el comando `npm run test:unit`.

## Razonamiento

1. Se avanzó de la siguiente manera: 
  1.1. Maquetación inicial, simulando objetos que llegarían
  1.2. Vuex + Integración
  1.3. Desarrollo Funcional
  1.4. Pruebas Básicas
  1.5. Pruebas Vuex - Store
  1.6. Pruebas Vuex - Componentes -> Se intentó pero la doc actual es diferente a la que conocía, ultimamente no he usado esto. 
  
2. Se quería hacer una búsqueda por api dinámica para paginar los resultados, pero el api ya no usa el https://pokeapi.co/api/v2/pokemon?search='string', por lo que se procedio a hacer una consulta inicial con un límite de 150 para realizar la funcionalidad del filtro sin problemas.


## Construido con 🛠️

A continuación se encuentran las librerías fuera del core de _Vue_ utilizadas en la construcción del proyecto:

 | Librería      | Descripción |
 | -----------   | ----------- |
 | axios         | Utilizada para el consumo de servicios REST |
 | vue-router    | Utilizada para el manejo y control de rutas |
 | vue-clipboard2| Utilizada para el copiado en el cortapapeles|
 | jest          | Utilizada para las pruebas|

## Autores ✒️

 * Edwin Junior Deza Culque
