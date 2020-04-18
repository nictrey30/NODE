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

## Middleware

**Middleware functions** are functions that have access to the **request** and **response** object. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware.
