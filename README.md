# React App
Esta es una aplicación web que permite ver productos, realizar busquedas, ver detalles de un producto, marcarlo como favorito y agregarlos al carrito.

Todos los productos han sido tomados de la API https://dummyjson.com

## Requisitos

- NPM >= v10
- Nodejs >= v22
- React 18
- Vite 5
- TypeScript 5

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

## Api elegida

https://dummyjson.com

Escogí esta API porque me permitió obtener información de productos de manera sencilla y además contaba con endpoints para obtener productos por id, por categoría y para buscar productos. También me pareció interesante la estructura de datos que tiene y las propiedades que ofrecía por cada producto.

## Decisiones técnicas
- Utilicé TypeScript para tener control de los tipos de datos y así poder usar el autocompletado en el editor de código. Me sirvió mucho en la maquetación de los componentes relacionados al producto.

- Utilicé Redux Toolkit para manejar el estado global de la aplicación, porque tenía que compartir y manejar información entre componentes, por ejemplo en la paginación para poder agregarle más productos a la página.

- También instalé Tailwind CSS para poder estilizar los componentes de manera rápida y sencilla.

- Me gustan la variedad de iconos que ofrece lucide icons por eso decidí usarlo en la aplicación.

- Decidí usar distintas vistas para poder aprender más sobre las rutas y la navegación entre componentes.

- Mi forma de estructurar los componentes se basó en el lugar donde se iban a usar. Por ejemplo, los componentes relacionados a la página principal están en la carpeta home, los componentes que se usan en varios lugares dentro de una carpeta shared como AButton, AInputSearch, etc.

## Pendientes / Mejoras
- Me hubiera gustado estilizar mejor la vista de mis favoritos y agregarle un link de volver atrás.

- Como agregué un icono de carrito, el pendiente sería implementar la vista completa para poder ver todo el resumen de lo que se agregó.

- En relación a lo anterior, también se debió agregar un botón para poder eliminar productos del carrito. Actualmente no lo tiene y solo se puede agregar.

- Mejorar las vistas en relación a cuando no hay datos o se está cargando la información.

- Mejorar la responsividad de la aplicación, sobre todo en el navbar y los filtros.

- En la vista de detalles del producto, queda como pendiente ver las reseñas que también eran ofrecidas por la API. Sobre todo porque en una situación real de compra se espera ver las opiniones de otros compradores.

- Otro pendiente, es mostrar mensajes ante una acción por ejemplo cuando se agrega a favoritos, creo que se hubiera visto mejor un mensaje que diga "Producto agregado a favoritos" o algo similar. Lo mismo cuando se agrega al carrito. Los mensajes informativos son importantes para los usuarios.

- Tener variables de entorno para la url de la API, actualmente está en una constante pero lo mejor sería tenerla en una variable de entorno, sobre todo en una aplicación real.