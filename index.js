const express= require("express");
const cors= require("cors");
const bodyParser = require('body-parser')
const { default: mongoose } = require("mongoose");
const userRoute= require("./router/userRoutes")
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://AddToCart:7906626073@cluster0.dlutmh4.mongodb.net/?retryWrites=true&w=majority`,(connect)=>{
     console.log("DataBase is connected")
})


const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use("/api/user",userRoute)


const path = require("path");
app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'client','build')))
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

PORT =5000;
app.listen(PORT,()=>{
  console.log("Server is running on :" ,PORT)
})