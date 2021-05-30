const photos = require('../models/photos')
const ColorThief = require('colorthief');

exports.getAllPhotos = (req, res) => {
  // el controlador va a obtener todos los datos del modelo 'cats'
  var allPhoto = photos.findAll()
  
  allPhoto = allPhoto.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  res.render('pages/index', { photos: allPhoto, page_name: 'index' })
}

exports.getAddPhotos = (req, res) => {
  res.render('pages/add-photos', { page_name: 'add', url: ''})
}

exports.postAddPhotos = (req, res) => {
  // recibir los datos del POST
  const name = req.body.name
  const url = req.body.url
  const date = req.body.date
  
  if (!photos.exist(url)) {
    
    ColorThief.getColor(url)
    .then(resColor => { 
      console.log(resColor)
      const color = `rgb(${resColor[0]}, ${resColor[1]}, ${resColor[2]})`
      // insertar el nuevo gato en la BBDD
      photos.addPhoto(name, url, date, color)

      // redirigir al cliente a la lista de gatos
      res.redirect('/photos')
    })
    .catch(err => { console.log(err) })

  } else {
    res.render('pages/add-photos', { page_name: 'add', url: url})
  }
  
}

exports.deletePhoto = (req, res) => {

  var id = req.params.id

  photos.deletePhoto(id)

  res.redirect('/photos')
}

exports.getEditPhoto = (req, res) => {
  var photo = photos.getPhotoById(req.params.id)
  res.render('pages/add-photos', { page_name: 'edit', url: '', photo : photo})
}

exports.postEditPhoto = (req, res) => {

  var id = req.params.id
  var name = req.body.name
  var date = req.body.date

  photos.editPhoto(id,name,date)
 
  res.redirect('/photos')
}
