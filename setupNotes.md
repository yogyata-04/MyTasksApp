# COMMANDS FOR SETUP

- cd backend
- npm init -y (creates package.json file)
- npm install express@version (creates package-lock.json and node_modules)
- create server.js / app.js / or whatever
- node server.js (to run server.js)
- npm install nodemon -D (dev dependency); devDependencies contain tools needed to develop, test, or lint the application, while dependencies are required to run the application in production

# STATUS_CODES
- 1XX : Informational
- 2XX : Success
  - 200 OK
  - 201 Created
- 3XX : Redirection
  - 301 Moved permanently
- 4XX : Client errors
  - 400 Bad request
  - 401 Unauthorised
  - 403 Forbidden
  - 404 Not found
  - 429 Too Many Requests
- 5XX : Server Error
  - 500 Internal server error
  - 503 Service Unavailable

# SQL VS NOSQL

### SQL (Postgres, MySQL)
- structured data (data stored in rows and columns)
- uses sql language (to interact with db, structured queries used)
- best for complex queries (ideal when we need relationships between data like orders and customers) like for Social media, banking application

## NOSQL (MongoDB, Cassandra)
- flexible data format (store data like json or key value pairs - good for changing data shapes)
- uses query language or API (Each NoSQL database has its own way of querying, often simpler and faster for certain tasks)
- best for big data or real time apps (great for fast changing or huge amount of data)

### MONGOOSE

At its core, Mongoose works by:
- Connecting to a MongoDB database.
- Defining Schemas that describe the structure and constraints of documents.
- Creating Models from schemas to perform CRUD operations.
- Executing Queries with built-in validation and middleware support.]
