import React, { Component } from 'react';
import * as actions from './action'
import {Link} from 'react-router-dom'

export default class FavoritesAlbums extends Component {
    state={
        albums:[]
    }
    componentDidMount = () => {
    let favorites =  actions.getFavoritesAlbum()
    this.setState({albums:JSON.parse(favorites)})
    };

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
                                </div>
                            </div>
                        </div>
                    </div>
            )
        })):null
    }
    
  render() {
      
    return (
        <div className="row">
          <div className='col-md-10 mx-auto'>
            <div className='row'>
                {this.renderAlbums()}
            </div>
          </div>
      </div>
    );
  }
}
