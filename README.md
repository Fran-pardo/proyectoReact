# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Acerca del proyecto

El proyecto se trata de un e-comerce creado con React en donde se podrán comprar varios vehículos tanto clásicos como modernos.

### Funciones

En productos.js se pueden encontrar las diferentes funciones las cuales crean una promesa y devuelve lo pedido.
Por ejemplo la función obtenerProductos() nos devolverá todos los vehículos de nuestro catalogo sin ningun filtro.
Por otro lado la función obtenerProductosByCategoria() realiza todo lo contrario ya que nos devuelve los vehículos según sus categorias (usado o 0km) 

### Containers

Hasta ahora tenemos solo dos containers: ItemListContainer y ItemDetailContainer. En el primero tenemos toda la lógica la cual nos mostrará los vehículos en el catálogo de la página principal sin ningún tipo de filtro. Mientras que la segunda posee la lógica de los detalles de cada vehículo.

### Componentes

Tenemos varios componentes en los cuales utilizamos algunas librerías como Boostrap o Material UI, las cuales fueron instaladas mediante npm. Cada componente posee su hoja de estilos propia (css).

### Rutas

Para facilitar las rutas de navegación instalamos react-router-dom mediante npm. Esto facilita considerablemente la navegacíon de la página y se desarrolla en App.js


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
