const express=require("express");
const app=express();
const Member=require("./DB/members");
require("./DB/conn");
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const templatePath=path.join(__dirname,"./templates/views");
const partialsPath=path.join(__dirname,"./templates/partials");


app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("",(req,res)=>{
    
    res.render("index");
})
//to register user
app.post("/register",async(req,res)=>{
    try{

        const password = req.body.password;
        const cpassword= req.body.cpassword;
      
        if(password === cpassword){
          const user = new Member({
              name:req.body.userName,
              lastName:req.body.userLastName,
              email:req.body.email,
              gender:req.body.gender,
              phone:req.body.number,
              age:req.body.age,
              password:password,
              cpassword:cpassword
      
          })
          const ans = await user.save();
      
          res.status(201).render("welcome");
        }else{
            res.send("passwords are not matching");
        }
    }catch(err){
        console.log(err);
        res.send(err);
    }
})

//to login user

app.post("/login",async(req,res)=>{

try{

    const password=req.body.password;
    const email=req.body.email;
  
    const realMail=await Member.findOne({email:email});
    if(realMail.password === password){
    //   res.status(201).render("welcome");
    console.log(password);
  
    }else{
      res.status(400).send("invalid login details")
    }
}
  catch(err){
   res.send(err);
  }
})

app.get("/welcome",(req,res)=>{
    res.render("welcome")
})



app.listen(port,()=>{
    console.log(`listening on the port ${port}`);
})



//to run dev we need to write npm run dev

