import  express from "express";
import AdminModel from "../admin/adminModel.js";
 

const AdminRouter=express.Router()

AdminRouter.post("/Register",async(req,res)=>{

let AdminRegister = new  AdminModel (req.body)
let result=await AdminRegister.save()
res.json(result)
})

export default AdminRouter




