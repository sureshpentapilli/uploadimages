const mongoose = require('mongoose');


const DB = "mongodb+srv://ravisuresh:ravi123@cluster0.clb8crl.mongodb.net/ImgUpload"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>console.log("db connected")).catch((err)=>console.log("err" + err.message))