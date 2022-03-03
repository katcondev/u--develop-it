const mysql = require('mysql2')
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    //  your mysql username,
    user: 'root',
    password: 'password',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

//Default response for any other request(Not Found)
app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});