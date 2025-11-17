-- Initialize database tables for Student Management System

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER NOT NULL,
    dob DATE NOT NULL,
    recordstatus VARCHAR(50) DEFAULT 'ACTIVE'
);

-- Create marks table
CREATE TABLE IF NOT EXISTS marks (
    id SERIAL PRIMARY KEY,
    studentid INTEGER NOT NULL,
    subject VARCHAR(50) NOT NULL,
    score DECIMAL(5,2) NOT NULL CHECK (score >= 0 AND score <= 100),
    FOREIGN KEY (studentid) REFERENCES students(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_students_recordstatus ON students(recordstatus);
CREATE INDEX IF NOT EXISTS idx_marks_studentid ON marks(studentid);

-- Insert sample data
INSERT INTO students (fullname, email, age, dob, recordstatus) VALUES
('John Doe', 'john.doe@example.com', 20, '2003-05-15', 'ACTIVE'),
('Jane Smith', 'jane.smith@example.com', 21, '2002-08-22', 'ACTIVE'),
('Mike Johnson', 'mike.johnson@example.com', 19, '2004-12-10', 'ACTIVE')
ON CONFLICT (email) DO NOTHING;

-- Insert sample marks
INSERT INTO marks (studentid, subject, score) VALUES
(1, 'Mathematics', 85.50),
(1, 'Physics', 92.75),
(1, 'Chemistry', 78.25),
(2, 'Mathematics', 91.00),
(2, 'Physics', 88.50),
(3, 'Mathematics', 76.75)
ON CONFLICT DO NOTHING;