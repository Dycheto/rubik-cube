const express = require(`express`);
const app = express();

app.all(`/`, (req, res) => {
    res.write(`Hello world!`);
    res.end();
})

app.listen(5000, console.log.bind(console, `Server is running on http://localhost:5000`))