const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    const {username} = req.body;
    const {password} = req.body;
    const newUser = await pool.query(
      'INSERT INTO userlist (username, password) VALUES ($1,$2)',
      [username, password],
    );
    res.send('new user added');
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/user/:name', async (req, res) => {
  const newUser = await pool.query(
    "SELECT username from userlist where username = 'zedric'",
  );
  const user = newUser.rows[0].username;
  console.log(req.params, 'params');
  res.send(req.params.name);
});

app.listen(port, () => {
  console.log(`Server has started on ${port}`);
});
