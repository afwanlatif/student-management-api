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
   DB_NAME=your_database_name
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=db
   DB_PORT=5432
   DB_DIALECT=postgres
   PGADMIN_EMAIL=your_email@example.com
   PGADMIN_PASSWORD=your_pgadmin_password
   ```

2. **Run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Stop containers:**
   ```bash
   docker-compose down
   ```

## 🔧 Environment Files

- `.env.local` - Local development configuration
- `.env.docker` - Docker development configuration

## 📝 Available Scripts

- `npm run dev` - Run app locally with local DB
- `docker-compose up` - Start full Docker stack
- `docker-compose down` - Stop Docker containers

## 🌐 Access Points

### Local Development
- **API Server:** `http://localhost:3000`
- **Database:** PostgreSQL on localhost:5432

### Docker Development
- **API Server:** `http://localhost:3000`
- **Database:** PostgreSQL on localhost:5433
- **pgAdmin:** `http://localhost:8080`
  - Email: your_email@example.com
  - Password: your_pgadmin_password

## 🐛 Troubleshooting

### Database Connection Issues

1. **Local Development:**
   - Ensure PostgreSQL is running: `pg_ctl status`
   - Check connection: `psql -U your_username -d your_database_name`

2. **Docker Development:**
   - Check containers: `docker ps`
   - View logs: `docker-compose logs db`
   - Reset volumes: `docker-compose down -v && docker-compose up --build`

### Common Fixes

- **Port conflicts:** Change PORT in .env files
- **Module issues:** Delete node_modules and run `npm install`

## 📁 Project Structure

```
src/
├── config/          # Configuration files
├── controller/      # Route controllers
├── models/          # Database models
├── router/          # Route definitions
└── app.ts          # Main application file
```
