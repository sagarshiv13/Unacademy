const app = require("./index")

const connect = require("./db")
const port = process.env.PORT || 2445

app.listen(port,async() =>{
    try{
        await connect()
        console.log("running on port 2345")
    }catch(e){
     console.log(e.message)
    }
  
})