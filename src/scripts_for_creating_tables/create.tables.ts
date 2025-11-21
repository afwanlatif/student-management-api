import { sequelize } from "../config/db.config"
import '../models/student.model'
import "../models/marks.model"

const createTables = async () => {
    try {
        await sequelize.sync() // It Synchronize all Model At Once 
        console.log("Tables created successfully")
    } catch (error) {
        console.log("Error creating tables", error)
    };
};

createTables();