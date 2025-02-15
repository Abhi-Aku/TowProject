const mongoose = require('mongoose');

const PdfSchema= new mongoose.Schema({
    title:{type:String,required:true},
    descrepiton:{type:String,required:true},
    due_date:{type:String,required:true},
    status:{type:String,required:true},
})
const Pdf=mongoose.model('Pdf',PdfSchema);

module.exports=Pdf;