const express = require('express');
const app = express();
const port = 8080;


//: route üzerinden bir parametre alacağını ifade eder!
app.get('/product/:id', (req, res) => {

    let id = req.params.id;

    res.send("Request ile gelen ID parametresi: " + id);

});


app.get('/orders', (req, res) => {

   let { name, city } =  req.query;

   console.log('Queries', req.query);

   res.send("Orders queries: " + name);

})



app.get('/', (req, res) => {
    res.send("Hello Express Package!");
})

app.get('/user', (req,res) => {
    //status yoksa default 200 döner. Diğer türlü status ü elle yazabiliriz.
    res.status(201).json({name:'Çağatay', surname:'Yıldız'});
})

app.listen(8080, function () {
    console.log(`Example app listening on port ${port}`)
})