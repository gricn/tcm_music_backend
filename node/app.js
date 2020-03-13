const express = require('express')
const mountRoutes = require('./routes')
const logger = require('./module/logger')
const app = express();

mountRoutes(app)

app.use(logger);
app.use('/public', express.static('public'))



// app listen 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server starting at port ${PORT}.`));