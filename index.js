import  express  from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
let password = "ILoveProgramming";
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true}));


function passwordCheck(req,res, next){
     const userInput = req.body.password;
     if(userInput === password)
     {
        userIsAuthorised = true;
     }
     next();

}

app.use(passwordCheck);
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})
app.post("/check",(req,res)=>{

   
   
    if(userIsAuthorised)
    {
       
        res.sendFile(__dirname + "/public/secret.html");

    }
    else{
     
      res.sendStatus(401).redirect("/");
    }
})
 

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})
