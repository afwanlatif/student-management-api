import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';
import { Record_Status } from '../constants/recordstatus.constants';

// Define the User class by extending Model
class Student extends Model { }


// initializing student model

Student.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    recordstatus: {
        type: DataTypes.STRING,
        defaultValue: Record_Status.ACTIVE
    }
},
    {
        sequelize,             // sequelize instance
        modelName: 'Student',
        tableName: 'students',
        timestamps: false,   // This will disable createdAt and updatedAt


    }
);

export { Student };