import React, { Component } from 'react';
import * as actions from './action'

export default class detailsAlbums extends Component {
    state={
        album:'',
        tracks:[]
    }
    componentDidMount = () => {
      actions.getAlbum(this.props.match.params.id)
      .then(album=>this.setState({
           album,
           tracks:album.tracks.data      
    }))
    };
    
    renderAlbum = () => {
        const {album}=this.state
      return (
        <div className='col-md-12 mb-3'>
        <div className='card border-danger'>
            <img src={album.cover_big} alt='music' className='card-img-top'/>
            <div className='card-body'>
                <span className='text-primary'>{album.release_date}</span>
                <div className="text-title">
                    {album.title}
                </div>
            </div>
            <div className='card-footer'>
               {this.renderTracks()}
            </div>
        </div>
    </div>
      )
    }

    renderTracks=()=>{
        const {tracks}=this.state
        return tracks && tracks.length ?
        tracks.map((track,index)=>(
            <figure key={index} className='figure'>
                <figcaption className='figure-caption text-xs-right'>Ecouter {track.title}</figcaption>
                <audio controls src={track.preview}>
                    votre navigateur ne supportes pas
                    <code>audio</code> html element.
                </audio>
            </figure>
        ))
        :
        null
    }

  render() {
    return (
        <div className="row">
        <div className='col-md-10 mx-auto'>
          <div className='row'>
              {this.renderAlbum()}
          </div>
        </div>
    </div>
    );
  }
}
