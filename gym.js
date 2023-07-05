const express = require("express")
const path =require("path")
const fs =require("fs")
const app=express()
const port=80

app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    // const param={'title':'Farhan Gym'}
    res.status(200).render('gymming.pug');
})

app.post('/',(req,res)=>{
    console.log(req.body)
    nam=req.body.name
    age=req.body.age
    mygen=req.body.mygen
    weight=req.body.weight
    console.log("I am in post request")
    let output=`The name of the client is ${nam},who is ${age}year old,gender is ${mygen} and weight is ${weight}kg`
    fs.writeFileSync("output.txt",out)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render("gymming.pug",params)
})

app.listen(port,()=>{
    console.log(`Website has started at port ${port}`)
})