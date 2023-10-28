const mongoose=require('mongoose');
const express=require('express');
const route=require('./routes/product');
const cors=require('cors');
const server=express();
// server.use(cors({ origin: 'http://localhost:5173' }));
server.use(express.static('dist'));

// server.use('*', (req, res)=>{
//   res.sendFile(path.resolve(__dirname,'dist','index.html'));
// })





main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://vijayjadhav:Jadhav%40123@cluster0.rzbeqip.mongodb.net/ecommerceDatabase?retryWrites=true&w=majority');
  console.log("Database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
server.use(express.json());
server.use('/', route.router);

server.listen(8080, ()=>{
    console.log('Server started');
})
