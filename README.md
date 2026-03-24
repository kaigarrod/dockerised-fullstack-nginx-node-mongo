# Simple Full-stack application

This is a simple full-stack application demonstrating a containerised architecture using Docker.

## Application Architecture 

**Browser** -> **nginx** -> **backend** -> **database** -> **response**

This is a containerised full-stack app
The Nginx serves the frontend and proxies API requests to a Node backend
The Node backend fetches the data from a mongoDB.
All servers are containerised within Docker to allow each application to communicate over a shared network.
With this architecture it is set up so only the frontend is exposed publicly. 
The applications communicate over the shared network to request and respond to required queries.

### How to run?

docker compose up -d --build 


### What I have learnt through completing this project?

This was the first project that I have attempted, the goal was to understand the use of Docker and successfully
dockerise a multi-container application.