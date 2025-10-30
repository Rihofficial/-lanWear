import {v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js";



// controller function for ading product
const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, popular} = req.body

        // extracting image if provided
        const image1 =req.files?.image1?.[0];
        const image2 =req.files?.image2?.[0];
        const image3 =req.files?.image3?.[0];
        const image4 =req.files?.image4?.[0];

        const images =[image1,image2,image3,image4].filter((item)=>item !== undefined)

        // upload image to cloudinary or use default image
        let imageUrl;
        if(images.lenght>0){
        imageUrl = await Promise.all(
            images.map(async(item)=>{
                const result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
                return result.secure_url
            })
        )
        }else{
            // Define image url if no images are present
            imageUrl=["https://via.placeholder.com/150"]
        }

        // create product data
        const productData ={
            name,
            description,
            price:Number(price),
            category,
            subCategory,
            popular: popular == "true"? true: false,
            sizes: sizes ? JSON.parse(sizes):[],  //default to empty array if sizes are not provided
            image: imageUrl,
            date:Date.now()
        } 

        console.log(productData)

        const product = new productModel(productData)
        await product.save()

        res.json({success:true, message: "product Added"})
}catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// controller for removing product
const removeProduct = async (req, res) => {}


// controller function for single product details
const singleProduct = async (req, res) => {}


// controller function for listing all products
const listProduct = async (req, res) => {}



export { addProduct, removeProduct, singleProduct, listProduct };