const app=require("./app")
const dotenv=require("dotenv")
//config
dotenv.config({path:"backend/config/config.env"});

//connection of db
const connectDatabase=require("./config/db")

//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`)
    process.exit(1);
})
connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

//unhandled promise rejection
