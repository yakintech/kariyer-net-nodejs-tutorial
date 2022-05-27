
const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: String,
    cNumber: Number
})

const productSchema = new Schema({
    title: String,
    description: String,
    addDate: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    points: [],
    price: Number,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    //category2: { type: categorySchema },
    // category : {}
    //categoryId : Schema.Types.ObjectId
});


const webUserSchema = {
    name: String,
    surname: String,
    addresses: [{
        name: String,
        city: String
    }]
}


const Product = mongoose.model('Product', productSchema);
const WebUser = mongoose.model('WebUser', webUserSchema);
const Category = mongoose.model('Category', categorySchema);



    // var product = new Product({
    //     title:'Deve Taban ı',
    //     description: 'Haftada bir su ister...',
    //     price: 15,
    //     category2: {
    //         name: 'Ev Bitkisi',
    //         cNumber: 9
    //     }
    // })

    // product.save((errP, docP) => {
    //     console.log('NEW PRODUCT', docP);
    // })


//Category insert..
// var category = new Category({
//     name: 'Electronic',
//     cNumber: 554433
// })


// category.save((err, doc) => {

//     var product = new Product({
//         title:'Vestel',
//         description: 'Vestel product..',
//         price: 55,
//         category: doc._id
//     })

//     product.save((errP, docP) => {
//         console.log('NEW PRODUCT', docP);
//     })

// })


Product.findById('628b8aa1accbbcf1efe16784')
    .populate("category").exec((err, doc) => {
        console.log('Data: ', doc.category.name);
    })



//Product insert işlemi...
// var product = new Product({
//     title: 'Huawei',
//     description: 'Yeni huawei',
//     points: [3, -1],
//     price: 5500
// });

// product.save((err, doc) => {
//     if (!err) {
//         console.log('New product', doc);
//     }
// });


//Tüm productları listeleme
// Product.find((err,docs) => {
//     if(!err){
//         console.log('products', docs);
//     }
// })

//Tüm productları silme

// Product.deleteMany((err, res) => {
//     console.log('Response: ', res);
// })


//Mongoose Queries

//title Huawei olan ÜRÜNLERİ getir

// Product.find({title: 'huawei'}, (err,docs) => {
//     if(!err){
//         console.log('Result: ', docs);
//         console.log("Count: " + docs.length)
//     }
// });

//Büyük küçük harf farketmeden yakala. title_lower ile title alanını küçülttük
// Product.find({'title_lower': 'huawei'}, (err,docs) => {
//     if(!err){
//         console.log('Result: ', docs);
//         console.log("Count: " + docs.length)
//     }
// })


//Fiyatı 5000 ile 8000 arasındaki ürünleri bana ver
// Product.find({price: { $gte:5000, $lte: 8000 }}, (err,docs) => {
//     if(!err){
//         console.log('Result: ', docs);
//     }
// })

//Ürün adı h harfi ile başlayan -- Test edilecek ***
// Product.find({ "title": { $regex: 'H'+ '.*' }}, (err,docs) => {
//     console.log('Result: ', docs);
// })

// //Ürün adı o ile bitenler -- Çalışmıyor düzenlenecek ***
// Product.find({title: {$regex: '.*' +'o' }}, (err, docs) => {
//     if(!err){
//         console.log('Result: ', docs);
//     }
// })

//ürün adı Oppo olan TEK ÜRÜNÜ BANA VER. Linq daki firstOrDefaul a karşılık gelmekte

// Product.findOne({title:'Oppo'}, (err,doc) => {
//     if(!err){
//         console.log('Result: ', doc);
//     }
// })


//Id ye göre product getir

// Product.findById('627e6a7ac3b5ec0ca83a09cb', (err,doc) => {
//     if(!err){
//         console.log('Result: ', doc);
//     }
// })


//Id si belirtilen ürünü sil
// Product.findByIdAndDelete('627e6a6b1e6a801b922f58f1', (err,res) => {
//     console.log('Deleted...: ' + res);
// })


//ID si belirtilen ürünün fiyatını 100 yap
//1. yol
// Product.findById('627e6a37234e9b57b70159de', (err,doc) => {
//     if(!err){
//         doc.price = 333;

//         doc.save((saveErr, updateDoc) => {
//             if(!saveErr){
//                 console.log('Updated: ', updateDoc);
//             }
//         })
//     }
// })

//2. yol
// Product.find({_id: '627e6a37234e9b57b70159de'}, (err,docs) => {
//     docs[0].price = 444;
//     docs[0].save();
// })

//3. yol
// Product.findOne({_id : '627e6a37234e9b57b70159de'}, (err, doc) => {
//     doc.price = 555;
//     doc.save();
// })

//4. yol
// Product.findByIdAndUpdate('627e6a37234e9b57b70159de',{price: 666},(err,doc) => {
//     //Dökümanın update öncesi halini bana verir.
//     console.log('updated doc: ' + doc);
// })


//Product tablosuna bulk insert
// Product.insertMany([{title:'Casper', price: 444},{title:'Lenovo', price:224}], (err,docs) => {
//     console.log('Result: ', docs);
// })


//İlk 5 ürünü bana ver. Limit metodu sql deki top keywordune karşılık gelir
// Product.find().limit(5).exec((err,docs) => {
//     console.log(docs);
// })



//Ürünleri ada göre sırala. Sıralama işlemlerinde asc ve desc anahtar kelimeleri yerine -1 ve 1 de kullanılabilir
// Product.find().sort({title: 'asc'}).exec((err,docs) => {
//     console.log('Products', docs);
// })

//Ürünleri ada göre tersten sırala
// Product.find().sort({title:'desc'}).exec((err,docs) => {
//     console.log('Products: ', docs);
// })

//ilk 5 ürünü atladı ve kalan ürünleri yazdırdı.
// Product.find().skip(5).exec((err, docs) => {
//     console.log('Products ', docs);
// })


mongoose.connect("mongodb+srv://cagatay:nxpMvXNUuYA5evrY@cluster0.yk1lz.mongodb.net/techcareerdb?retryWrites=true&w=majority");

