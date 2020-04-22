# NODE
Much of Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kind of objects (called "emmiters") emit events that cause function objects(called "listeners") to be called.

# Traversy Express Crash Course

## Basic Server Syntax

```javascript
const express = require('express);
const PORT = process.env.PORT || 5000;
// Init express
const app = express();

// create your endpoints/route handlers
app.get('/', (req, res) => {
  res.send('Hello world!');
})

// listen on a port
app.listen(PORT, () => `server running on port ${PORT}`)
```

## Basic Route Handling

- Handling requests/routes is simple
- app.get(), app.post(), app.put(), app.delete(), etc.
- access to params, query strings, url parts, etc.
- Express has a router so we can store routes in separate files and export
- we can parse incoming data with the Body Parser module

```javascript
app.get('/', (req, res) => {
  // fetch from database
  // load pages
  // return json
  // full access to request and response
});
```

## Middleware

**Middleware functions** are functions that have access to the **request** and **response** object. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware.
You can view middleware functions as a stack of functions that executes whenever a request is made to the server

- execute any code
- make changes to the req/res objects
- end response cycle
- call next middleware in the stack
