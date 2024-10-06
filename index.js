const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser'); 
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8086;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

/*
- Create new html file named home.html 
- add <h1> tag with the message "Welcome to ExpressJs Tutorial"
- Return home.html page to the client
*/
router.get('/home', (req, res) => {
  // Send the home.html file to the client
  res.sendFile(path.join(__dirname, 'home.html'));
});

/*
- Return all details from user.json file to the client as JSON format
*/
router.get('/profile', (req, res) => {
  fs.readFile(path.join(__dirname, 'user.json'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading user data' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

/*
- Modify /login router to accept username and password as JSON body parameters
- Read data from user.json file
- If username and password are valid, send the response as
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid, send response as
    {
        status: false,
        message: "User Name is invalid"
    }
- If password is invalid, send response as
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Check if both username and password are provided in the request body
  if (!username || !password) {
    return res.status(400).json({ status: false, message: 'Username and password are required' });
  }

  // Read user data from user.json
  fs.readFile(path.join(__dirname, 'user.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ status: false, message: 'Error reading user data' });
    }

    const user = JSON.parse(data);

    // Validate username
    if (user.username !== username) {
      return res.status(401).json({ status: false, message: 'User Name is invalid' });
    }

    // Validate password
    if (user.password !== password) {
      return res.status(401).json({ status: false, message: 'Password is invalid' });
    }

    // If both are valid, return success response
    return res.status(200).json({ status: true, message: 'User Is valid' });
  });
});

/*
- Modify /logout route to accept username as a parameter and display the message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req, res) => {
  // Extract the username from URL parameters
  const { username } = req.params; 

  // If username is provided, display the logout message
  if (username) {
    res.send(`<b>${username} successfully logged out.</b>`);
  } else {
    res.send('<b>Username is required to logout.</b>');
  }
});

/*
Add error handling middleware to handle the following error
- Return a 500 page with the message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).send('Server Error'); 
});

app.use('/', router);

// Start the server on port 8086 or the port defined in the environment
app.listen(process.env.port || 8086, () => {
  console.log('Web Server is listening at port ' + (process.env.port || 8086));
});