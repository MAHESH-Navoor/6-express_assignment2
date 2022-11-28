const express = require('express');
const app = express();
const port = 8090;
const bodyParse = require('body-parser');
const cors=require('cors')
app.use(bodyParse.json())

app.use(cors())

app.get('/info', (req,res)=>{
    let query = req.query
    let path = req.path
    console.log(query)
    console.log(path)
    res.json({"info":{query,path}})
})


app.post('/data',(req,res)=>{
    let data = [];
    data.push(req.body.id)
    data.push(req.body.city)
    res.send(data)
    console.log(data)
})

app.use((req,res)=>{  // 
     res.sendFile('./public/404.html',{root:__dirname})
})
    

app.listen(port,()=>{
    console.log('listening on port',port);
})