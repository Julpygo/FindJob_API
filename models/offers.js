import mongoose from "mongoose";

const Schema = mongoose.Schema

const offersSchema = new Schema({
    company_id:{
        type:Number,
        required:true,
        unique:true
    },
    company_name:{
        type:String,
        required:true,
        unique: true
    },
    cargo:{
        type:[],
        required:true
    },
    descripcion:{
        type:String,
        required:false
    },
    verified:{
        type:Boolean,
        default:false
    },
    requirements_min:{
        type: [],
        required:true
    },
    requirements_opc:{
        type: [],
        required:false
    }
})

export default mongoose.model("company_offers",offersSchema)