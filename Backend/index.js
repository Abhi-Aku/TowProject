const express = require('express')
const bodyparser=require('body-parser')
const app = express()
const port =process.env. PORT ||3000

const db =require('./db')
app.use(bodyparser.json())

const pdfRouter=require('./Router/PdfRouter')
app.use('/pdf', pdfRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})