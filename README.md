# BACKEND (Comisión 30920) - SEGUNDA ENTREGA PROYECTO FINAL
### EMMANUEL PINTO

## Para ejecutar el proyecto localmente correr el comando "node server.js"

### Notas:

- Modificar el valor de `db` en el archivo "src/containers/index.js" para determinar en donde se almacenarán los productos y carritos:
  - `mongo`: conectado con DB en Mongo Cloud
  - `firebase`: conectado con DB en Firebase
  - `filesystem`: archivos txt locales persistentes en la carpeta /DATA
- Si en "public/js/main.js", la variable `admin` esta en TRUE, se muestra el formulario en pantalla. Se puede AGREGAR, ACTUALIZAR o ELIMINAR productos del catálogo.
- Cada vez que se accede al sitio, se crea un carrito nuevo.
