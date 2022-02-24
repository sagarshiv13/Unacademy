const app = require("./index")

const connect = require("./db")


app.listen(2445,async() =>{
    try{
        await connect()
        console.log("running on port 2345")
    }catch(e){
     console.log(e.message)
    }
  
})