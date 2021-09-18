let express = require("express")
let data=require("./public/data.json")

let server=express() // instantiate  by creating express

server.use(express.static("public"))

server.get("/",(req,res)=>{
    res.send("<h1>server is running</h1>")
})

server.get("/movies",function(req,res){
    res.json(data)
})
server.get("/genre",function(req,res){
    let allGenreObjects = data.map(ele=>{
        return ele.genre
    })

    let uniqueGenreObjects = []

    for(let i=0; i<allGenreObjects.length; i++){
        let genreIndex = uniqueGenreObjects.findIndex((ele)=>{
            return ele["_id"] ==allGenreObjects[i]["_id"];;
        })
        if(genreIndex==-1){
            uniqueGenreObjects.push(allGenreObjects[i]);
        }
    }
    res.json(uniqueGenreObjects);
})

server.listen(process.env.PORT || 3000,
    ()=>console.log("server is running"));//start server with port number to uniquely identify process
    //



