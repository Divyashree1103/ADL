const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // Perform additional server-side validation if needed

    res.send('Data received: Name - ' + name + ', Email - ' + email);
});

app.get('/', (req, res) => {
    // Handle the root URL (e.g., render an HTML page)
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
