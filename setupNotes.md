- cd backend
- npm init -y (creates package.json file)
- npm install express@version (creates package-lock.json and node_modules)

- create server.js / app.js / or whatever
- node server.js (to run server.js)

STATUS_CODES
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
