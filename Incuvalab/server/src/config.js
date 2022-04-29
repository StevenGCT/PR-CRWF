import { config } from 'dotenv'
config();
//Variable de Etorno
export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPort: process.env.DB_PORT || 1433,
    dbPassword: process.env.DB_PASS || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB || '',
    email:process.env.EMAIL || '',
    password:process.env.PASSWORD || ''
}