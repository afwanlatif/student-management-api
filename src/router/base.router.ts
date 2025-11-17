import express from 'express';
import studentRouter from './student.router';
import marksRouter from '../router/marks.router';

const setupRoutes = (app: express.Application) => {
    app.use('/student', studentRouter); // Mount student routes at /student
    app.use('/marks', marksRouter);      // Mount marks routes at /marks
};

export default setupRoutes;

