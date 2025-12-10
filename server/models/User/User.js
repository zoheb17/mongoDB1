import mongoose from "mongoose" 

const userSchema=new mongoose.Schema({
    fullname:{
         type:String,
         require:true,
         trim:true 
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true

    },                           
    age:{
        type:Number,
        minlength:[18,"minimun age is 18"],
        maxlength:[100,"max length "]
    },
    isActive:{
        type:Boolean,
        default:true
    },
    adress:{
        type:String,
        require:true
        
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    otp:{
        type:Number,
        default:null
    },
    isverfied:{
        type:Boolean,
        default:false

    },
   phone: {
    type:String,
    require:true

    }
    },
    {
        timestamps:true,
    }
)

const userModel=mongoose.model("user",userSchema)

export default userModel