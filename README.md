# Simple Full-Stack Dockerised Application

This project demonstrates a containerised full-stack application using Docker.

---

## 🧱 Architecture 

**Browser** -> **nginx** -> **backend** -> **database** -> **response**

- **Nginx** serves the frontend and acts as a reverse proxy for API requests
- **Backend (Node.js)** handles API requests and communicates with the database
- **MongoDB** stores application data
- All services run in separate Docker containers and communicate over a shared network

Only the frontend is exposed publicly, while backend and database services remain internal.

---

## 🚀 How to Run

```bash
docker compose up -d --build
```
```bash
http://localhost
```


### What I have learnt through completing this project?

This was the first project that I have attempted, the goal was to understand the use of Docker and successfully
dockerise a multi-container application.
