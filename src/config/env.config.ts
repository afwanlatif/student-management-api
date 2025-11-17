import dotenv from 'dotenv';
dotenv.config();

const { PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

export const envConfig = {
    port: Number(PORT) || 3000,
    db_name: DB_NAME || 'studentDB',
    db_user: DB_USER || 'postgres',
    db_password: DB_PASSWORD || 'root',
    db_host: DB_HOST || 'localhost',
    db_port: Number(DB_PORT) || 5432,
    db_dialect: DB_DIALECT || 'postgres'
};