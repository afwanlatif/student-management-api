import express from 'express';
const app = express.Router();
import * as controller from '../controller/user.controller';


// defining Routes

app.post('/add', controller.createStudent);
app.get('/get/:id', controller.getStudent);
app.delete('/delete/:id', controller.deleteStudent);
app.get('/getAll', controller.getAllStudents);
app.put('/update/:id', controller.updateStudent);

export default app;