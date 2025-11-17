import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';
import { Student } from '../models/student.model';

// Define the User class by extending Model
class Marks extends Model { }

// initiallizing marks table


Marks.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'students', // Foreign key reference
            key: 'id'
        },
        onDelete: 'CASCADE'    // Delete marks when student deleted
    },
    subject: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    score: {
        type: DataTypes.DECIMAL(5, 2), // 5 digits, 2 decimal places
        allowNull: false,
        validate: {
            min: 0,  // Minimum score 0
            max: 100  // Maximum score 100
        }
    }
},
    {
        sequelize,             // sequelize instance
        modelName: 'Marks',
        tableName: 'marks',
        timestamps: false,    // This will disable createdAt and updatedAt

    }
);

// Define associations
Marks.belongsTo(Student, {  // Many-to-one relationship
    foreignKey: 'studentid',
    as: 'student'
});

Student.hasMany(Marks, {     // One-to-many relationship
    foreignKey: 'studentid',
    as: 'marks'
});

export { Marks };