const express = require('express');
let mongoose = require('mongoose');

const app = express();
const usr = require('./conn.js');
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let uri = process.env.WOW_MONGO;


const port = 3001;
app.use(cors());

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'));


app.post('/post', async (req, res,err) => {

  try {
    let formdata = req.body;
    let mem = new usr(formdata);
    let data = await mem.save();
res.send('data submited')
console.log('data submitid')}
 catch (err) {
  if(err.code===11000){
    console.log(err,'user already exisist !')
   res.send('provide uniqe username')
  }else{
    console.log('data submitid ...')}
  }

 


}







)
// send one data
app.post('/one', async function (req, res) {
  let formdata = req.body.name;
  let dataf = await usr.find({uname:formdata});
  res.send(dataf)
  console.log(dataf);
})
// homepage route

app.get('/', async (req, res) => {
  let dataf = await usr.find({});
  console.log()
  res.json(dataf);
})

// serch one data route

app.get('/one',async (req, res) => {
 
  let formdata = req.body.name;
  let dataf = await usr.find({uname:formdata});
  if(dataf){
console.log('welcomme to home page');

  }
  res.json(dataf);
})


app.post('/login',async function (req, res) {
  let pass=req.body.password;
  let username=req.body.username;
try {

  let dataf = await usr.findOne({uname:username});
 
  if(dataf){
    console.log(dataf.uname);
  //  res.send('data is right')
   res.send('ok')
   }
   else{
res.send('not valid')

   }
 
  
} catch (error) {
 console.log(error)
}


})



app.delete('/pd/:id',async function(req, res) {
  const { id } = req.params;
  let resultd=await usr.deleteOne({_id:id})
  res.send(`Delete record with id ${id}`);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

