const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');

const app = express();
app.use(bodyParser.json());

app.use(express.static('dist'));

// Send the username of the os user
app.get('/api/getUsername', (req, res) => {
  res.send({ username: os.userInfo().username })
});

// Send a 404 error if request starts by '/api/' but route doesn't exist
app.use('/api/*', (req, res) => { throw createError(404, "Page Not Found") });

// Always send index.html for the requests not starting by '/api/' 
app.use((req, res) => { 
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
