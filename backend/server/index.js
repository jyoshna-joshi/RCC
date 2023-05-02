const dotenv = require('dotenv');
const express = require('express'); //Import the express dependency
const cors = require('cors')
const connectDB = require('./config/db')
const routes = require('./routes/index')
const bodyParser = require('body-parser')

dotenv.config();
const app = express()
connectDB();

app.use(cors())

app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended: true})); 

app.use(routes)


const PORT = process.env.PORT || 3002
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))