import express from "express";
import bookRoute from './routes/book.js';
import bodyParser from "body-parser";
import dotenv from "dotenv/config.js";
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();
const port = 4000;

app.use(cors())
app.use(bodyParser.json())
app.use('/api', bookRoute)
app.use('/api/posts', postRoutes)

export default postRoutes;


//app.get('/api/v1/stories/:id', function(req,res, next) {
  //res.status(200);
  //res.set('Content-type', 'text/html');
  //res.send('<html><body>' +
  //'<h1>Hello ' + req.params.user_name + '</h1>' +
  //'</body></html>'
  //);
//});

//?
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage');
// }).post('/', function (req, res) {
//   res.send('POST request to the homepage');
// }).all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...');
//   next(); // pass control to the next handler
// }).use(function(req, res, next){
//     res.status(404).send('Page introuvable !');
// });

//app.all('/secret', (req, res, next)=>{
  //res.send('accessing your secret files')
  //next()
//})

app.listen(port ,()=> console.log(`server is running on http://localhost:${port}`)
);
