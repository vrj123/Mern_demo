const express=require('express');
const route=require('./routes/product3');

const server=express();

server.use(express.json());
server.use('/', route.router);












server.listen(8080, ()=>{
    console.log('Server started');
})