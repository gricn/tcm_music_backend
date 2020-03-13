const express = require('express')
const mountRoutes = require('./routes')
const logger = require('./module/logger')
const app = express();

mountRoutes(app)

app.use(logger);
app.use('/public', express.static('public'))



// app listen 
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0",() => console.log(`Server starting at port ${PORT}.`));