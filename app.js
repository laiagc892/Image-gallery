const express = require('express')
const multer = require('multer')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))



const photosRoutes = require('./routes/photos')

app.use('/photos', photosRoutes)

app.get('/', (req, res) => {
    res.send('Bienvenido a la página Web de Gallery XL')
})
/*

const fileStorage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, './img');
    },
    filename: (req, file, cd) => {
        cd(null, Date.now() + '--' + file.originalname);
    },
})

const upload = multer({storage : fileStorage})

app.post('/', upload.single('img'), (req,res) => {
    res.send('sdajhfjkhsdgjhsd')
})*/

app.listen(3000)