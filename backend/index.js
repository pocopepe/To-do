const express=require('express');
const { createToDo, updateToDo } = require('./types');
const { todo } = require('./db');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());

db={};

app.post('/todo', (req, res)=>{
    const createPayLoad=req.body;
    const parsedPayLoad=createToDo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
    res.status(411).json({"msg": "wrong inputs"});
    return;
   }
   const finalData=new todo({title: createPayLoad.title, description: createPayLoad.description, completed: false});
   finalData.save().then(res.json({"msg": "inputs have been updated succesfully"}));
})

app.get('/todo', async (req, res)=>{
   const todos= await todo.find({});
   res.json({todos});
})

app.put('/completed', async (req, res)=>{
    const updatePayLoad=req.body;
    const parsedPayLoad=updateToDo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({"msg": "wrong inputs"});
        return;
    }
    await todo.updateOne({_id: updatePayLoad.id}, {completed: true});
    res.json({"msg": "todo has been succesfully completed"});
})

app.listen(3000)