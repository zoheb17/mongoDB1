import express from "express"
import bcrypt from "bcrypt"
import userModel from "../../models/User/User.js"
const router =express.Router() 





router.get("/getalluser",async(req,res)=>{
    try {
        let  alluser=await userModel.find();
        console.log(alluser);
        res.status(200).json({msg:alluser}) 
        

        console.log(alluser);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})

        
    }
}) 








router.post("/register",async(req,res)=>{
    try {
        let userinput=req.body 
        userinput.password=await bcrypt.hash(userinput.password,10)
        await userModel.create(userinput)
        res.status(200).json({msg:"register done"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})
// get user by id -------------
router.get("/:id",async(req,res)=>{
    try {
        const user = await userModel.findById(req.params.id);
        if(!user)return res.status(404).json({msg:"user not found"});
        res.status(200).json({success:true, user});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})

router.post("/email",async (req,res)=>{
    try {
        let email=req.body.email 
        let user=await userModel.findOne({email})
        res.status(200).json({msg:user})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.post("/phone",async (req,res)=>{
    try {
        let phone=req.body.phone 
        let user=await userModel.findOne({phone})
        res.status(200).json({msg:user})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})



// delete user by id 

// router.delete("/:id",async (req,res)=>{
//     try {
//         const deleted =await userModel.findOneAndDelete({_id:req.params.id});
//         if(!deleted){
//             return res.status(404).json({msg:"user not found "});
//         }
//         res.status(200).json({msg:"user deleted"})

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg:error})
        
//     }
// })
router.delete("/email/:email",async (req,res)=>{
    try {
        // console.log();    
        const deleted =await userModel.findOneAndDelete({email:req.params.email});
        if(!deleted){
            return res.status(404).json({msg:"user not found "});
        }
        res.status(200).json({msg:"user deleted"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})

export default router