const mongoose = require('mongoose');
const logicFunc = require('./functionFile');


const connectMongoose=async()=> {

    mongoose
    .connect(
      `mongodb://localhost:27017/onemart`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err);
    });

}

connectMongoose();


const data = [
    { "category": "Mobiles & Accessories", "name": "realme C20 (Cool Blue, 32 GB)", "description": "2 GB RAM | 32 GB ROM | Expandable Upto 256 GB16.51 cm (6.5 inch) HD+ Display8MP Rear Camera | 5MP Front Camera5000 mAh BatteryMediaTek Helio G35 Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "7,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/w/h/q/c20-rmx3063-realme-original-imagfxfzay72jqvh.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme C11 2021 (Cool Blue, 32 GB)", "description": "2 GB RAM | 32 GB ROM | Expandable Upto 256 GB16.51 cm (6.5 inch) HD+ Display8MP Rear Camera | 5MP Front Camera5000 mAh BatteryOcta-core Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "7,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme C11 2021 (Cool Grey, 32 GB)", "description": "2 GB RAM | 32 GB ROM | Expandable Upto 256 GB16.51 cm (6.5 inch) HD+ Display8MP Rear Camera | 5MP Front Camera5000 mAh BatteryOcta-core Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "7,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme 8 5G (Supersonic Black, 128 GB)", "description": "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Dimensity 700 (MT6833) Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "16,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/knrsjgw0/mobile/f/o/w/8-5g-rmx3241-realme-original-imag2d8eksc2szzy.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme 8 5G (Supersonic Black, 64 GB)", "description": "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Dimensity 700 (MT6833) Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "15,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/knrsjgw0/mobile/f/o/w/8-5g-rmx3241-realme-original-imag2d8eksc2szzy.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme 8 5G (Supersonic Blue, 128 GB)", "description": "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Dimensity 700 (MT6833) Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "16,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/knrsjgw0/mobile/u/f/w/8-5g-rmx3241-realme-original-imag2d8ett6ukhcs.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme 8 5G (Supersonic Blue, 64 GB)", "description": "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Dimensity 700 (MT6833) Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "15,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/knrsjgw0/mobile/u/f/w/8-5g-rmx3241-realme-original-imag2d8ett6ukhcs.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme Narzo 30 5G (Racing Blue, 128 GB)", "description": "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Dimensity 700 (MT6833) Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "17,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kq18n0w0/mobile/d/l/f/narzo-30-5g-rmx3242-realme-original-imag45yjdkgxddvh.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme Narzo 30 5G (Racing Silver, 128 GB)", "description": "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Dimensity 700 (MT6833) Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "17,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kq18n0w0/mobile/d/b/6/narzo-30-5g-rmx3242-realme-original-imag45yjub2vdrzx.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme Narzo 30A (Laser Black, 32 GB)", "description": "3 GB RAM | 32 GB ROM | Expandable Upto 256 GB16.54 cm (6.51 inch) HD+ Display13MP + 2MP | 8MP Front Camera6000 mAh BatteryMediaTek Helio G85 Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "9,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/klgx0280/mobile/z/b/z/narzo-30a-rmx3171-realme-original-imagyhbgzcyfwzfz.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme 8 5G (Supersonic Black, 128 GB)", "description": "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Dimensity 700 (MT6833) Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "18,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/knrsjgw0/mobile/f/o/w/8-5g-rmx3241-realme-original-imag2d8eksc2szzy.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme C20 (Cool Grey, 32 GB)", "description": "2 GB RAM | 32 GB ROM | Expandable Upto 256 GB16.51 cm (6.5 inch) HD+ Display8MP Rear Camera | 5MP Front Camera5000 mAh BatteryMediaTek Helio G35 Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "7,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/7/9/u/c20-rmx3063-realme-original-imagfxfzjrkqtbhe.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme 8 5G (Supersonic Blue, 128 GB)", "description": "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Dimensity 700 (MT6833) Processor1 Year Warranty for Mobile and 6 Months for Accessories", "price": "18,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/knrsjgw0/mobile/u/f/w/8-5g-rmx3241-realme-original-imag2d8ett6ukhcs.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme Narzo 30 (Racing Blue, 64 GB)", "description": "6 GB RAM | 64 GB ROM | Expandable Upto 256 GB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Helio G95 Processor30W Charger1 Year Warranty for Mobile and 6 Months for Accessories", "price": "15,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kq18n0w0/mobile/y/2/b/narzo-30-rmx2156-realme-original-imag45yhzhugdcqh.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme Narzo 30 5G (Racing Blue, 64 GB)", "description": "", "price": "15,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kq18n0w0/mobile/d/l/f/narzo-30-5g-rmx3242-realme-original-imag45yjdkgxddvh.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme Narzo 30 5G (Racing Silver, 64 GB)", "description": "", "price": "15,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kq18n0w0/mobile/d/b/6/narzo-30-5g-rmx3242-realme-original-imag45yjub2vdrzx.jpeg?q=70", "slug": "1", "quantity": "14" },
    { "category": "Mobiles & Accessories", "name": "realme Narzo 30 (Racing Blue, 128 GB)", "description": "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB16.51 cm (6.5 inch) Full HD+ Display48MP + 2MP + 2MP | 16MP Front Camera5000 mAh BatteryMediaTek Helio G95 Processor30W Charger1 Year Warranty for Mobile and 6 Months for Accessories", "price": "16,999", "imageSrc": "https://rukminim1.flixcart.com/image/312/312/kq18n0w0/mobile/y/2/b/narzo-30-rmx2156-realme-original-imag45yhzhugdcqh.jpeg?q=70", "slug": "1", "quantity": "14" },
]


logicFunc(data);

