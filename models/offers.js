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
        required:false
    },
    salary:{
        type:Number,
        required:false
    },
    divisa:{
        type:String,
        default: "COP",
        required: false
    },
    descripcion:{
        type:String,
        required:false
    },
    requirements_min:{
        type: [],
        required:false
    },
    requirements_opc:{
        type: [],
        required:false
    },
    verified:{
        type:Boolean,
        default:false
    },
})

export default mongoose.model("company_offers",offersSchema)