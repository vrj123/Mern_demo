const http=require('http');
const fs=require('fs');
// const url=require('url');
const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products=data.products;

const index=fs.readFileSync('index.html', 'utf-8');

const server=http.createServer((req, res)=>{


    const {method, url}=req;


    const requestUrl = new URL(req.url, `http://${req.headers.host}`);

  if (requestUrl.pathname === '/demo' && requestUrl.searchParams.has('product')) {
    const productId = requestUrl.searchParams.get('product');
    console.log(productId);

    res.end("Hello");
}




    console.log(method, url);

    if(req.url.startsWith('/product')){
        let id=req.url.split('/')[2];
        let product=products.find((prd)=>prd.id==id);
        let mpro=index.replace('**title**', product.title).replace('**price**', product.price).replace('**info**', product.description).
        replace('**img**', product.images[0]);
        res.setHeader('Content-Type', 'text/html');
        res.end(mpro)
        return;
    }

    switch(req.url){
        case '/':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;
        case '/api':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        default:
            res.writeHead('404');
            res.end();
    }

  console.log("Server stared");
//   res.end("Hello");
// res.setHeader("Content-Type", "text/html");
//   res.end(JSON.stringify(data));
// res.end(index);
})

server.listen(8080);


// const requestUrl = new URL(req.url, `http://${req.headers.host}`);

//   if (requestUrl.pathname === '/demo' && requestUrl.searchParams.has('product')) {
//     const productId = requestUrl.searchParams.get('product');