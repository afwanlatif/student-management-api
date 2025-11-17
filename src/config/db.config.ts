import { Dialect, Sequelize } from 'sequelize';
import { envConfig } from './env.config';

const sequelize = new Sequelize(envConfig.db_name, envConfig.db_user, envConfig.db_password, {
    host: envConfig.db_host,
    port: envConfig.db_port,
    dialect: envConfig.db_dialect as Dialect
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export { sequelize, connectDB };