const { products } = require("./products");
const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');



const app = express();
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/products', (req,res) => {
    res.json(products);
});

app.post('/products', (req,res) => {

    //.body özelliği ile gelen request içerisindeki değerleri almak istiyorum.
    let newProduct = {
        id: Math.floor(Math.random() * 1000),
        name: req.body.name,
        unitPrice: req.body.unitPrice,
        unitsInStock : req.body.unitsInStock
    }

   products.push(newProduct);

    res.status(201).json(newProduct)
})


app.get('/productPage', (req,res) => {
    res.sendFile(path.join(__dirname, '/productMainPage.html'));
})

app.get('/productImage', (req,res) => {
    res.sendFile(path.join(__dirname, '/basarisizlik.jpg'));

})

app.delete("/products/:id", (req,res) => {

    let id = req.params.id;

    //Gelen ID ye göre silme işlemi...

    res.status(200).json({});

})

app.get('/products/:id', (req,res) => {
    let id = req.params.id
    let product = products.find(q => q.id == id);

    if(product != null){
        res.json(product)
    }
    else{
        res.status(404).json({'msg':'Product not found!'})
    }
});






app.listen(8080, function () {
    console.log(`Example app listening on port ${port}`)
})

