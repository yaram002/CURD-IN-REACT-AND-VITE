let mongoose=require('mongoose');

let schem=new mongoose.Schema({
name:{
    type:String
},
uname:{
    type:String,
    unique:true,
    required:true
},
pass:{
    type:String
},
city:{
    type:String
},
});
let usrs=mongoose.model('userdatas',schem);
module.exports=usrs