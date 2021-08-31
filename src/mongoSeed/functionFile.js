const slugify = require("slugify");
const Product = require('../models/product')

let count = 0;
const logicFunc=async(data)=>{

    data.forEach(prod => {
        const newProd = {
            category: '60d4b76b71f09d5b60964835',
            name: prod.name,
            description: prod.description,
            price: prod.price,
            slug: slugify(prod.name),
            productPictures:[{
                img: prod.imageSrc
            }],
            quantity: prod.quantity,
            createdBy: '60d46ed171f09d5b6096482e'
        }
        const product = new Product(newProd)
        product.save((error,product) => {
            if(error){
                console.log('error occured');
            }       
            count++;
            if(count===data.length){
                console.log('complete task');
            }
        });
    });
    
}

module.exports=logicFunc;