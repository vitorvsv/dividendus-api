
const express = require('express');

require('dotenv').config()

// Routes
const authRouter = require('./routers/auth.router');

// Settings
const PORT = process.env.APP_PORT || 3000;

// App instance
const app = express();

app.use(express.json()); // Enables JSON use for body

app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})