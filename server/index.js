const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');

const app = express();
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
  res.send({ username: os.userInfo().username })
});

// Always send index.html for the requests not starting by '/api' 
app.use((req, res) => { 
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
