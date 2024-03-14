import express from 'express'
import db from "../db/conn.js"
import { ObjectId } from 'mongodb';

const postRoutes = express.Router();

postRoutes.get('/', async(req, res)=>{
  let collection = await db?.collection('posts') 
  let result = await collection.find({}).limit(20).toArray() 
  res.send(result).status(200)
})

postRoutes.get('/:id', async(req, res)=>{
  let collection = await db?.collection('posts')
  let query = { _id: new ObjectId(req.params.id) };
  let results = await collection.find(query).toArray();
  console.log(results);
  if (!results) res.send("error occurred").status(400);
  res.send(results).status(200);
});

postRoutes.get('/', async(req, res)=>{
  let data = req.body
  if(!data) res.send('please send something').status(400);
  console.log(data)
  data.date = new Date()
  let collection = await db.collection('posts');
  let result = await collection.insertOne(data);
  if (result) {
    res.send("success!").status(201);
    }else if (!result) res.send("sorry o server error").status(500);
});

export default postRoutes;