const express=require("express");
const app=express();
const fs=require("fs");
const home=fs.readFileSync('index.html');    
                                                                             
const port=800;                   
app.use(express.urlencoded());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       0;
app.use('/static',express.static('static'));

app.get("/",(req, res)=>{
    res.status(200).end(home);
});
app.get("/index.html",(req, res)=>{
    res.status(200).end(home);
})
app.listen(port,()=>{
    console.log("server has been started");
});