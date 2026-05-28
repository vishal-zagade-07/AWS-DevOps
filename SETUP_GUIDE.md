# 🚀 Local Hosting Setup Guide

## Prerequisites

Before running the project locally, ensure you have:

1. **Node.js** (v14 or higher)
   - Download: https://nodejs.org/
   - Verify: `node -v` and `npm -v` in terminal

2. **PostgreSQL** (v12 or higher)
   - Download: https://www.postgresql.org/download/
   - Verify: `psql --version` in terminal

3. **Git** (optional but recommended)
   - Download: https://git-scm.com/

---

## Step-by-Step Setup

### 1️⃣ Clone/Download Project
```bash
cd c:\Users\YourUsername\Desktop
git clone <your-repo-url>
cd AWS-DevOps-Batch
```

### 2️⃣ Install Node Dependencies
```bash
npm install
```

### 3️⃣ Setup PostgreSQL Database

**Option A: Using pgAdmin GUI**
- Open pgAdmin
- Connect to your local PostgreSQL server
- Create new database named `car_website`
- Note your username and password

**Option B: Using Command Line**
```bash
psql -U postgres
CREATE DATABASE car_website;
\q
```

### 4️⃣ Configure Environment Variables

Edit `.env` file and update with your PostgreSQL credentials:

```env
PORT=5000
DB_USER=postgres
DB_PASSWORD=your_password_here
DB_HOST=localhost
DB_PORT=5432
DB_NAME=car_website
JWT_SECRET=your_super_secret_key_12345
NODE_ENV=development
```

**Replace:**
- `your_password_here` - Your PostgreSQL password
- `your_super_secret_key_12345` - Any random string for JWT

### 5️⃣ Start the Server

```bash
npm start
```

You should see:
```
Server running on http://localhost:5000
Database tables created successfully!
```

### 6️⃣ Access the Website

Open your browser and go to:
```
http://localhost:5000
```

---

## 📝 Detailed Instructions for Each OS

### Windows Setup

**1. Install Node.js:**
- Download from https://nodejs.org/
- Run installer (choose LTS version)
- Restart terminal/PowerShell

**2. Install PostgreSQL:**
- Download from https://www.postgresql.org/download/
- Run installer
- Remember the password you set for `postgres` user
- Default port is 5432

**3. Open Command Prompt / PowerShell:**
```bash
cd c:\AWS-DevOps-Batch
npm install
```

**4. Update `.env` file** with your PostgreSQL password

**5. Run the project:**
```bash
npm start
```

---

### macOS Setup

**1. Install Node.js (using Homebrew):**
```bash
brew install node
node -v
```

**2. Install PostgreSQL:**
```bash
brew install postgresql
brew services start postgresql
```

**3. Create database:**
```bash
createdb car_website
```

**4. Clone and setup:**
```bash
cd ~/Desktop
git clone <your-repo-url>
cd AWS-DevOps-Batch
npm install
```

**5. Update `.env` with credentials**

**6. Start:**
```bash
npm start
```

---

### Linux (Ubuntu) Setup

**1. Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2. Install PostgreSQL:**
```bash
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

**3. Create database:**
```bash
sudo -u postgres createdb car_website
```

**4. Setup project:**
```bash
git clone <your-repo-url>
cd AWS-DevOps-Batch
npm install
```

**5. Update `.env`**

**6. Start:**
```bash
npm start
```

---

## 🧪 Testing the Setup

### 1. Check if server is running
```
http://localhost:5000
```
You should see the car website homepage.

### 2. Test Registration
- Click "Register"
- Create account with email and password
- Should see success message

### 3. Test Login
- Click "Login"
- Use your registered credentials
- Should log in successfully

### 4. Test Car Browsing
- Click "Browse Cars"
- Should see filtered search options
- Try filtering by brand or price

### 5. Test API Endpoints (Optional)

Using Postman or curl:

**Register User:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"password123"}'
```

**Get All Cars:**
```bash
curl http://localhost:5000/api/cars
```

**Filter Cars:**
```bash
curl "http://localhost:5000/api/cars?brand=Tesla&minPrice=20000&maxPrice=50000"
```

---

## 🛠️ Troubleshooting

### Issue: "Port 5000 already in use"
**Solution:**
```bash
# Find process using port 5000
# Windows:
netstat -ano | findstr :5000

# Change port in .env
PORT=5001
```

### Issue: "Cannot connect to PostgreSQL"
**Solution:**
- Verify PostgreSQL is running
- Check username/password in .env
- Check DB_HOST is `localhost` (not 127.0.0.1)
- Verify database `car_website` exists

### Issue: "npm install fails"
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### Issue: "Database tables not created"
**Solution:**
- Ensure database exists
- Check .env credentials
- Delete and recreate database:
```bash
psql -U postgres
DROP DATABASE car_website;
CREATE DATABASE car_website;
```

---

## 📂 Project Structure (After Setup)

```
AWS-DevOps-Batch/
├── .env                    (Environment variables)
├── .gitignore             
├── package.json           
├── server.js              (Main server file)
├── db.js                  (Database connection)
├── database.js            (Database setup)
├── auth-routes.js         (Auth endpoints)
├── cars-routes.js         (Cars endpoints)
├── orders-routes.js       (Orders endpoints)
├── auth-middleware.js     (JWT middleware)
├── app.js                 (Frontend JavaScript)
├── styles.css             (Styling)
├── index-frontend.html    (Main HTML)
├── README.md              
└── FILE_STRUCTURE.md      
```

---

## 🚀 Quick Start (Summary)

```bash
# 1. Navigate to project
cd c:\AWS-DevOps-Batch

# 2. Install dependencies
npm install

# 3. Create PostgreSQL database
# (Use pgAdmin or command line)

# 4. Update .env with credentials

# 5. Start server
npm start

# 6. Open browser
# http://localhost:5000
```

---

## 📦 Default Test Credentials

After first run, create test account:
- **Email:** test@example.com
- **Password:** Test@123
- **Name:** Test User

---

## 🔧 Development Mode

For development with auto-reload (requires nodemon):

```bash
# Already in package.json
npm run dev
```

---

## 📱 Access from Other Devices

To access from another computer on same network:

```bash
# Find your IP address (Windows)
ipconfig

# Use it to access from other device
http://YOUR_IP:5000

# Example:
http://192.168.1.100:5000
```

---

## ✅ You're Ready!

Once you see "Server running on http://localhost:5000", your car website is live locally! 🎉

For any issues, check the troubleshooting section above.
