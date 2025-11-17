import { Request, Response } from 'express';
import { Marks } from "../models/marks.model";
import { Student } from '../models/student.model';
import { Record_Status } from '../constants/recordstatus.constants';

// Add marks for a student
const addMarks = async (req: Request, res: Response) => {
    try {
        const { studentid, subject, score } = req.body;

        // Validate student exists and is active
        const student = await Student.findOne({
            where: {
                id: studentid,
                recordstatus: Record_Status.ACTIVE
            }
        });

        if (!student) {
            return res.status(404).json({ message: 'Student not found or inactive' });
        }

        const newMarks = await Marks.create({ studentid, subject, score });
        return res.status(201).json({ message: "Marks added successfully", marks: newMarks });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all marks for a specific student
const getMarksByStudent = async (req: Request, res: Response) => {
    try {
        const studentId = req.params.id;

        const marks = await Marks.findAll({
            where: { studentid: studentId },
            include: [{
                model: Student,
                as: 'student',
                attributes: ['id', 'fullname', 'email']
            }]
        });

        return res.status(200).json({ message: 'Marks fetched successfully', marks });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Update marks
const updateMarks = async (req: Request, res: Response) => {
    try {
        const marksId = req.params.id;
        const { subject, score } = req.body;

        const marks = await Marks.findByPk(marksId);
        if (!marks) {
            return res.status(404).json({ message: 'Marks record not found' });
        }

        await Marks.update({ subject, score }, { where: { id: marksId } });
        const updatedMarks = await Marks.findByPk(marksId);

        return res.status(200).json({ message: 'Marks updated successfully', marks: updatedMarks });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete marks
const deleteMarks = async (req: Request, res: Response) => {
    try {
        const marksId = req.params.id;

        const marks = await Marks.findByPk(marksId);
        if (!marks) {
            return res.status(404).json({ message: 'Marks record not found' });
        }

        const deleteMark = await Marks.destroy({ where: { id: marksId } });
        return res.status(200).json({ message: 'Marks deleted successfully', deleteMark });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export {
    addMarks,
    getMarksByStudent,
    updateMarks,
    deleteMarks
};