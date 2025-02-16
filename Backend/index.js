const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const MONGOODB_URL = "mongodb://localhost:27017/PDFFILE";

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

const PdfSchema = new mongoose.Schema({
    pdfname: { type: String, required: true }
});

const PdfModel = mongoose.model('PdfModel', PdfSchema);

app.post('/upload', async (req, res) => {
    try {
        const { pdfname } = req.body;
        const newPdf = new PdfModel({ pdfname });
        const response = await newPdf.save();
        res.json({ message: "Pdf uploaded successfully", response });
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error uploading file" });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
