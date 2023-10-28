
const model=require('../model/product');
const Product=model.Product;



exports.getAllProducts=async(req, res)=>{
    try{
        const products=await Product.find();
        res.status(200).json(products);
    }
    catch(err){
        res.status(404).json(err);
    }
    
}

exports.getProduct=async(req, res)=>{
    try{
        const id=req.params.id;
        const product=await Product.findById(id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(404).json(err);
    }
   
}

exports.replaceProduct=async(req, res)=>{
    try{
        const id=req.params.id;
        const product=await Product.findOneAndReplace({_id:id}, req.body, {new:true});
        res.status(200).josn(product);
    }
    catch(err){
        res.status(404).json(err);
    }
}

exports.updateProduct=async(req, res)=>{
    try{
        const id=req.params.id;
        const product=await Product.findOneAndUpdate({_id:id}, req.body, {new:true});
        res.status(200).josn(product);
    }
    catch(err){
        res.status(404).json(err);
    }
}

exports.addProduct=async(req, res)=>{
    const product=new Product(req.body);
    // product.title="Samsung";
    // product.price=9999;
    // product.rating=5;
    // product.save((err, doc)=>{
    //     console.log({err, doc});
    // })
    await product.save().then((data)=>res.status(200).json(data)).catch((err)=>res.status(400).json(err));
}

exports.deleteProduct= async(req, res)=>{
    try{
        const id=req.params.id;
        const product=await Product.findOneAndDelete({_id:id});
        res.status(200).josn(product);
    }
    catch(err){
        res.status(404).json(err);
    }
}