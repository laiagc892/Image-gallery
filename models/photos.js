const BBDD_photos = [
  {
    id: 1,
    name: 'photo1',
    url: 'https://i.picsum.photos/id/390/200/200.jpg?hmac=jO0I_KIqGlM283KrH_KN8THBmylOIRyiWbKAx8412Ss',
    date: '2021-04-19',
    color: 'rgb(31,231,221)'
  },
  {
    id: 2,
    name: 'photo2',
    url: 'https://i.picsum.photos/id/989/200/200.jpg?hmac=YmaagsSArKDGDSeyRJ9aYRxKM6KdP49ZGYtyhLHlCcY',
    date: '2021-04-1',
    color: 'rgb(198,233,17)'
  },
  {
    id: 3,
    name: 'photo3',
    url: 'https://i.picsum.photos/id/258/200/200.jpg?hmac=SRxBTuyYSeHtVooeEMwmQPB0yIF3fqnvrOBR7DJnOlM',
    date: '2021-04-30',
    color: 'rgb(225,25,107)'
  }
]

const uuid = require('uuid')

exports.findAll = () => {
    return BBDD_photos
}

exports.exist = (url) => {
    return BBDD_photos.some(photo => {
        return photo.url == url
    })
}

exports.addPhoto = (name, url, date, color) => {

    const newPhoto =
    {
        id: uuid.v1(),
        name: name,
        url: url,
        date: date,
        color: color
    }

    BBDD_photos.push(newPhoto)
}

exports.deletePhoto = (id) => {
  var indexof = 0

  for(var i=0; i<BBDD_photos.length; i++){
    if(BBDD_photos[i].id==id){
      indexof = i
    }
  }

  BBDD_photos.splice(indexof, 1)
}

exports.editPhoto = (id,name,date) => {

  for(var i=0; i<BBDD_photos.length; i++){
    if(BBDD_photos[i].id==id){
      BBDD_photos[i].name = name
      BBDD_photos[i].date = date
    }
  }
}

exports.getPhotoById = (id) => {

  for(var i=0; i<BBDD_photos.length; i++){
    if(BBDD_photos[i].id==id){
      return BBDD_photos[i]
    }
  }
  return false
}