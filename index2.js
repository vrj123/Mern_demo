const fs=require('fs');
const express=require('express');
const morgan=require('morgan');
const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products=data.products;

const server=express();


// Application level middleware
// server.use((req, res, next)=>{
//     console.log(req.method);
//     next();
// })


// Bodyparser
server.use(express.json());

// server.use(morgan('default'));

// request query parameters
const auth1=(req, res, next)=>{
    if(req.query.password=='123'){
        console.log(req.query);
        next();
    }
    else res.sendStatus(401);
}


// Body (Hidden)
const auth2=(req, res, next)=>{
    if(req.body.password=='123'){
        console.log(req.body);
        next();
    }
    else res.sendStatus(401);
}


// url parameters
const auth3=(req, res, next)=>{
    if(req.params.id=='123') next();
    else res.sendStatus(401);
}


// server.use(auth);

// server.get('/', (req, res)=>{
//     // res.send('Hello');
//     // res.sendFile('/Users/Kiran Patil/Desktop/Node App/index.html');
//     // res.json(products);
//     // res.sendStatus(404);
//     // res.status(200).send("hello");
// })

// Static file hosting
// server.use(express.static('public'));


server.get('/', auth1, (req, res)=>{
    res.json({type:'GET'});
})

// server.get('/:id', (req, res)=>{
//     res.json({type:'Url params'});
// })

server.get('/demo', (req, res)=>{
    // res.json({name:`${req.query.name}`});
    res.json(req.query);
})

// server.use(express.static('public'));

server.post('/', auth2, (req, res)=>{
    // res.json({type:'POST'});
    res.json(req.body);
})

server.put('/', (req, res)=>{
    res.json({type:'PUT'});
})

server.delete('/', (req, res)=>{
    res.json({type:'DELETE'});
})

server.patch('/', (req, res)=>{
    res.json({type:'PATCH'});
})







console.log(process.env.DB_PASSWORD);
server.listen(8080, ()=>{
    console.log("Server Started");
});