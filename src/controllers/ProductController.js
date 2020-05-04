const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../database/DataBase.json');
const productos = JSON.parse(fs.readFileSync(filePath));

let saludo = 'Hola!!!';
let title = 'Mercado Liebre';

let ProductController = {
    home: (req, res) => {
        res.render('index', {title, saludo, productos});
    },
    detail: (req, res) => {
        res.render('detail', {title, saludo});
    }
}
module.exports = ProductController;