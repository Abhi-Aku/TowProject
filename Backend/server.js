const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const MONGOODB_URL = "mongodb://localhost:27017/FilePDF";

mongoose.connect(MONGOODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
});

app.use(bodyParser.json());
app.use(cors());


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
