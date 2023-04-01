const mongoose=require("mongoose")

const connction=()=>{
mongoose.connect('mongodb://127.0.0.1:27017/mydetail');
mongoose.connection.on('connected', () => console.log('db Connected with server'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));
}

module.exports=connction