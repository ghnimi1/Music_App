import Axios from "axios"

const API_KEY='426d7ca530mshd98c8c61889bebfp12623cjsnd8d8dd06f353'
 const request = Axios.create({
     baseURL:'https://deezerdevs-deezer.p.rapidapi.com/',
     timeout:30000,
     headers:{'X-RapidAPI-Key':API_KEY}
 })

 export function getAlbums (search='eminem') {
    const albums=request.get(`search?q=${search}`)
    .then(response=>response.data.data)
    .catch(error=>console.log(error))
    return albums
 }

 export function getAlbum(id){
     const albums=request.get(`album/${id}`)
     .then(response=>response.data)
     .catch(error=>console.log(error))
     return albums
 }

 export function getFavoritesAlbum(){
     const albums = localStorage.getItem('favorites')
     return albums
 }