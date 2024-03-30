require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/auth-router");
const connectDB = require("./utils/mongo");

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);

connectDB().then(() => {
    app.listen(3001, () =>{ 
        console.log(`Server running on port 3001`)
    })
});


// const collection = require("./mongo")
// const cors = require("cors")
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors());

// app.get("/",cors(),(req,res)=>{

// })


// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

// app.listen(8000,()=>{
//     console.log("port connected");
// })