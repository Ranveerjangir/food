import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({

   
    UserName:String,
    Password: String

})
const AdminModel = mongoose.model("Admin", AdminSchema)

export default AdminModel