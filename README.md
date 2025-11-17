# Student Management API

A Node.js/Express API with PostgreSQL database that supports both local and Docker development environments.

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd student-management-api
```

### 2. Choose Your Development Environment

The project supports two environments:
- **Option A**: Local Development (uses local PostgreSQL)
- **Option B**: Docker Development (uses containerized PostgreSQL)

### Prerequisites
- Node.js 18+
- **For Local:** PostgreSQL installed locally
- **For Docker:** Docker & Docker Compose

## 📋 Setup Instructions

**Choose one of the following options:**

### Option A: Local Development

1. **Install PostgreSQL locally** and create database:
   ```sql
   CREATE DATABASE your_database_name;
   CREATE USER your_username WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;
   ```

2. **Create `.env.local` file:**
   ```env
   PORT=3000
   DB_NAME=your_database_name
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_DIALECT=postgres
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run locally:**
   ```bash
   npm run dev
   ```

### Option B: Docker Development

1. **Create `.env.docker` file:**
   ```env
   PORT=3000
   DB_NAME=studentDB
   DB_USER=postgres
   DB_PASSWORD=your_secure_password
   DB_HOST=db
   DB_PORT=5432
   DB_DIALECT=postgres
   PGADMIN_EMAIL=your_email@example.com
   PGADMIN_PASSWORD=your_secure_admin_password
   ```

2. **Run with Docker Compose (IMPORTANT - use --env-file flag):**
   ```bash
   docker-compose --env-file .env.docker up --build
   ```
   
   **Note:** The `--env-file .env.docker` flag is required to properly load environment variables for Docker Compose variable substitution.

3. **Stop containers:**
   ```bash
   docker-compose down
   ```

## 🔧 Environment Files

- `.env.local` - Local development configuration
- `.env.docker` - Docker development configuration

## 📝 Available Scripts

- `npm run dev` - Run app locally with local DB
- `docker-compose --env-file .env.docker up` - Start full Docker stack
- `docker-compose down` - Stop Docker containers

## 🌐 Access Points

### Local Development
- **API Server:** `http://localhost:3000`
- **Database:** PostgreSQL on localhost:5432

### Docker Development
- **API Server:** `http://localhost:3000`
- **Database:** PostgreSQL on localhost:5433
- **pgAdmin:** `http://localhost:8080`
  - Email: admin@example.com
  - Password: admin123

## 🐛 Troubleshooting

### Database Connection Issues

1. **Local Development:**
   - Ensure PostgreSQL is running: `pg_ctl status`
   - Check connection: `psql -U your_username -d your_database_name`

2. **Docker Development:**
   - Check containers: `docker ps`
   - View logs: `docker-compose logs db`
   - Reset volumes: `docker-compose down -v && docker-compose --env-file .env.docker up --build`
   - **pgAdmin not starting:** Ensure you use `--env-file .env.docker` flag with docker-compose commands

### Common Fixes

- **Port conflicts:** Change PORT in .env files
- **Module issues:** Delete node_modules and run `npm install`

## 🔌 API Endpoints

### Student Management

#### Create Student
- **POST** `/student/add`
- **Body:**
```json
{
  "fullname": "John Doe",
  "email": "john.doe@example.com",
  "age": 20,
  "dob": "2003-05-15"
}
```

#### Get All Students
- **GET** `/student/getAll?page=1`
- **Query Parameters:** `page` (optional, default: 1)

#### Get Single Student
- **GET** `/student/get/:id`
- **Example:** `/student/get/1`

#### Update Student
- **PUT** `/student/update/:id`
- **Body:**
```json
{
  "fullname": "John Smith",
  "email": "john.smith@example.com",
  "age": 21,
  "dob": "2003-05-15"
}
```

#### Delete Student (Soft Delete)
- **DELETE** `/student/delete/:id`
- **Example:** `/student/delete/1`

### Marks Management

#### Add Marks
- **POST** `/marks/add`
- **Body:**
```json
{
  "studentId": 1,
  "subject": "Mathematics",
  "score": 85
}
```

#### Get Student Marks
- **GET** `/marks/student/:id`
- **Example:** `/marks/student/1`

#### Update Marks
- **PUT** `/marks/update/:id`
- **Body:**
```json
{
  "subject": "Mathematics",
  "score": 90
}
```

#### Delete Marks
- **DELETE** `/marks/delete/:id`
- **Example:** `/marks/delete/1`

### Response Format

All endpoints return JSON responses in this format:
```json
{
  "message": "Success/Error message",
  "data": {}, // Response data (varies by endpoint)
  "metadata": {} // Pagination info (for list endpoints)
}
```

## 📁 Project Structure

```
src/
├── config/          # Configuration files
├── controller/      # Route controllers
├── models/          # Database models
├── router/          # Route definitions
└── app.ts          # Main application file
```
