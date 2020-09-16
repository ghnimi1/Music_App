import React, { Component } from 'react';
import * as actions from './action'
import './widgets/Home.css'
import Searchbar from './searchBar/Searchbar';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default class Home extends Component {
 state={
     albums:[]
 }

componentDidMount = () => {
   return actions.getAlbums().then(item=>this.setState({albums:item}))
};

searchAlbums=(term)=>{
    actions.getAlbums(term).then(item=>this.setState({albums:item}))
}

addToFavorites = album => {
    const oldFavorites=JSON.parse(localStorage.getItem('favorites')) || []
    if (this.checkAlbum(oldFavorites,album)){ 
    swal ( "Warning" ,  "Album deja ajouté!" ,  "warning" )
    return false   }
    oldFavorites.push(album)
    let favorites = oldFavorites
    localStorage.setItem('favorites',JSON.stringify(favorites))
        swal ( "Album Ajouté" ,  "Album ajouté a vos favorie" ,  "success" )

}

checkAlbum = (albums,album) => {
    let found = albums.some(item=>{
     return  item.album.id===album.album.id
    })
    return found
}

renderAlbums=()=>{
    const {albums}=this.state
    return albums && albums.length ? 
    (albums.map((item,index)=>{
        return(
            <div key={index} className='col-md-4 mb-2'>
                    <div className='card border-danger'>
                        <img src={item.album.cover_big} alt='music' className='card-img-top'/>
                        <div className='card-body'>
                            <span className='text-primary'>{item.artist.name}</span>
                            <div className="text-title">
                                {item.title}
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='links'>
                                <Link to={`/details/${item.album.id}`} className='link'><i className='fa fa-info text-danger'/></Link>
                                <a onClick={()=>this.addToFavorites(item)}  className='link'><i className='fa fa-star text-danger'/></a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    })):null
}

  render() {
      console.log(this.state.albums);
    return (
      <div className="row">
          <div className='col-md-10 mx-auto'>
            <Searchbar searchAlbums={this.searchAlbums}/>
            <div className='row'>
                {this.renderAlbums()}
            </div>
          </div>
      </div>
    );
  }
}
