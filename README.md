# PR-CRWF
Proyecto de sistemas 2
# Para la conexion de la BD local se debe crear un archivo .env en Incuvalab/.env
PORT = 4000 -- se recomienda usar el puerto 4000 para backend pero pueden escoger uno para realizar sus pruebas
DB_PORT = Puerto del SQL server generalmente es el 1433
DB_USER = tuUsario --Usuario de sql server
DB_PASS = tuPassword --contraseña de sql server
DB_SERVER = localhost -- ip de sql server
DB = DBIncuvalab --nombre de la base de datos
El archivo .env deberia verse de este tipo esto para cumplir con las buenas  practicas y tener la seguridad
NOTA: si no se tiene activada la opcion de conexion mediante el protocolo TCP/IP a sql server
se debe activar y configurar el puerto y dirección IP: Para mejor informacion investigar en google y si buscas de la manera correcta tal vez en youtube
de tener nuestras credenciales solo disponibles para nosotros y no asi publica

para instalar todas las depencias se necesita estar en el directorio incuba lab con el comando npm install

falta instalar la propiedad npm i -g @babel/node

problomas para importar React- npm install babel-plugin-react-require --save-dev


