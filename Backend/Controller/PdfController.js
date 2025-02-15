const pdf =require('../Models/PdfModel')

const PdfPost=async (req,res)=>{
   const{title,descrepiton,due_date,status}=req.body
   try{
    const newPdf=new pdf({
        title,
        descrepiton,
        due_date,
        status
    })
    const responce=await  newPdf .save();
    res.status(201).json({massage:"Pdf send succces",responce})
   }catch(err){
    console.log("error");
    
    return res.status(400).json({msg:err.message})
   }

}

module.exports= {PdfPost};