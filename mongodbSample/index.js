const { ObjectId } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;


var url = "mongodb+srv://cagatay:nxpMvXNUuYA5evrY@cluster0.yk1lz.mongodb.net/techcareerdb?retryWrites=true&w=majority";

//Bağlantı testi...
// MongoClient.connect(url, function(err, db) {
    
//     if (!err) {
//         console.log('db', db);
//     }
// });


//Tüm kategorileri getirme...
// MongoClient.connect(url, function(err, db) {
    
//     if (!err) {
//         var dbo = db.db("techcareerdb");
//         dbo.collection("categories").find({}).toArray().then(data => {
//             console.log('DATA', data);
//         })
//     }
// });


//Yeni bir category ekleme
// MongoClient.connect(url, function(err, db) {
    
//     if (!err) {
//         var dbo = db.db("techcareerdb");
//         dbo.collection("categories").insertOne({name:'Test Category', cNumber: 200}).then((data) => {
//             console.log('DATA', data);
//         })
//     }
// });


//Kategori silme işlemi
// MongoClient.connect(url, function(err, db) {
    
//     if (!err) {
//         var dbo = db.db("techcareerdb");
//         dbo.collection("categories").deleteOne({_id: ObjectId("629a0f3d533c6cebfb36fe75")}).then(res => {
//             console.log('RES', res);
//         })
//     }
// });

