# 🚀 Node.js Redis Caching Demo

A simple Node.js + Express server that demonstrates **basic Redis caching**. It simulates a delay for API response and uses Redis to cache that data so subsequent requests are much faster ⚡

---

## 🧠 What It Does
- ⏱️ Simulates a 2-second delay on `/products` route
- 🔁 Caches the response in Redis Cloud / RedisInsight
- ⚡ Next time you call the route — instant response!
- Great for learning about **server-side caching** basics

---

## 🛠️ Setup Instructions

### 📁 1. Clone the Project
```bash
git clone --branch <branch> <repo-url>
cd your-project-folder
```

### 🔐 2. Create a .env file with your Redis credentials
```bash
REDIS_HOST=XXXXXXXX.redis-cloud.com
REDIS_PORT=00000
REDIS_PASSWORD=xxxxxxxxxxxxxxxx
```

### 📦 3. Install Dependencies & Start the Server
```bash
npm install
npm run dev
```

### 🔌 4. Test the API
GET http://localhost:3000/products


### 🧱 Project Structure
```bash
📦 your-project/
 ┣ 📄 server.js        → Main Express app
 ┣ 📄 .env             → Redis credentials
 ┣ 📄 package.json     → Dependencies & scripts
 ┗ 📁 node_modules/    → Installed packages
```
### ▶️ Youtube video referrence "6 Pack Programmer" yt channel
[HINID LANGUAGE](https://youtu.be/Y46wlauVH_o?si=OmTOFo9lFjOoEOWZ)