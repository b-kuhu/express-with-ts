import express,{Request,Response} from 'express';
const app = express();

app.use(express.json()); 


//Routes for chaining all CRUD requests
app.route('/api/data') 
.get( (req:Request,res:Response)=>{
 return res.send('hello world');
})
.post((req:Request,res:Response)=>{
   console.log(req.body);
   return res.sendStatus(200);
})
.put((req:Request,res:Response)=>{
    console.log(req.body);
    return res.sendStatus(200);
 })
.all((req:Request,res:Response)=>{
    return res.sendStatus(200);
 })
app.listen(3000,()=>{
    console.log(`Application listening at http://localhost:3000`);
})

