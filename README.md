# Simple Full-Stack Dockerised Application

This project is intended to demonstrate containerised system architecture rather than application complexity.

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
**Then visit**
```bash
http://localhost
```


### What I have learnt through completing this project?

This was the first project that I have attempted, the goal was to understand the use of Docker and successfully
dockerise a multi-container application.
