const app = require('./api/routes');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;

//Resources
app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});