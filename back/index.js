import express from "express";
import corss from "corss";
import mongoose from "mongoose";
import AdminRouter from "./admin/adminRouter.js";

const app = express()
const connection = mongoose.connect("mongodb+srv://ranveerjangir384:ranveer123@cluster0.storqvd.mongodb.net/?retryWrites=true&w=majority")

app.use(cors())

app.use(express.json())
app.use("/Data",AdminRouter)


connection.then(()=>{
app.listen(4000 , ()=> console.log("Server has been started 4000"))
})
.catch((err)=> console.log(err))

