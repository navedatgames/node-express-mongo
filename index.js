const mongoose  = require('mongoose');

// connect to db

mongoose.connect('mongodb+srv://navedmahtab777:Mongo123@cluster0.jh6q9ci.mongodb.net/test1').then(()=>{
    console.log("connected to db successfully!")
}).catch((err)=>{
    console.log("error",err)
})


// define schema
const students = new mongoose.Schema({
    name:String,
    company:String,
    age:Number
})

    // convert to model
const Student  = new mongoose.model("Student",students);

const addData = async()=>{

    const ss = await Student.findOne({name:"naved"})

    console.log(ss)
}

addData();


























// // initialize in app

// const app = express();
// app.get('/',(req,res)=>{
//     res.send("hello ")
// });

// app.get('/about',(req,res)=>{
//     res.send("hello about ")
// })

// app.get('/services',(req,res)=>{
//     res.send("hello services")
// })


// app.listen(3001,()=>{
//     console.log("Server started at ",3001)
// });