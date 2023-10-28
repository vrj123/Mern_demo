
const fs=require('fs');
const products=JSON.parse(fs.readFileSync('data.json', 'utf-8')).products;




exports.getProduct=(req, res)=>{
    res.json(products);
}

exports.addProduct=(req, res)=>{
    products.push(req.body);
    console.log(req.body.id);
    res.json(req.body);
}

exports.deleteProduct= (req, res)=>{
    const productIndex=products.findIndex((product)=>product.id==req.params.id);
    const deleted=products.splice(productIndex, 1)[0];
    res.json(deleted);
}