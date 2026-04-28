const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// This tells the server to look for your HTML files in a folder called 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
