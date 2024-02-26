//clerkId, email, username,photo, firstName, lastName, planId, creditBlance

import { Schema, model, models } from "mongoose";



const UserSchema = new Schema({
    clerkId:{ type:String, required:true, unique:true,},
    email:{type:String, required:true, unique:true,},
    username:{type:String, required:true, unique:true,},
    photo: {type:URL, required:true, unique:true,},
    firstName: {type:String,},
    lastName:{type:String,},
    PlanId:{type:Number, default:1},
    creditBlance:{type:String, default:10}
    
    })

    const User = models?.User || model('User', UserSchema)

export default User;