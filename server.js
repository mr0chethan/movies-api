let express = require("express")
let data=require("./data.json")

let server=express() // instantiate  by creating express

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

server.listen(3000)//start server with port number to uniquely identify process



