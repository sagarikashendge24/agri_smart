const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://sagarikas:sagarika18@cluster0.ciubuft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})
    

// ,()=>console.log('Database Connected..'))


