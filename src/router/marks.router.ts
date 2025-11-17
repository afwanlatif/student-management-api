import express from 'express';
const app = express.Router();
import * as marksController from '../controller/marks.controller';

// Marks routes
app.post('/add', marksController.addMarks);
app.get('/student/:id', marksController.getMarksByStudent);
app.put('/update/:id', marksController.updateMarks);
app.delete('/delete/:id', marksController.deleteMarks);

export default app;