import Product from "../models/productModel.js";

export const addProductController = async (req,res)=>{
  try{
    const {name,dateCreated,warranty,price,isAvailable,image,desc} = req.body;
    
    const available = isAvailable === 'on' || isAvailable === true;

    const newProduct = new Product({
      name,
      dateCreated,
      warranty,
      price,
      isAvailable: available,
      image,
      desc
    });
    
    await newProduct.save();
    res.redirect('/products/allProducts'); 
  }
  catch(e){
    console.log(e);
    res.status(500).send('Data Could not be added to the database');
  }
}

export const getAllProducts = async (req,res)=>{
    try{
        const query = req.query.availability ? {isAvailable: req.query.availability} : {};
        
        const allProducts = await Product.find(query);
        res.render('products/index', {allProducts});
    }
    catch(e){
        console.log(e);
        res.status(500).json({"message":"Error fetching the products"});
    }
}
