import React, { Component } from 'react';

export default class Searchbar extends Component {
    state={
        term:''
    }

    handleInputChange=(e)=>{
        this.setState({term:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        let {term}=this.state
        if(term==='') return
        this.props.searchAlbums(term)
        this.setState({term:''})      
    }
  render() {
    return (
      <div className='search mb-2'>
          <form onSubmit={this.handleSubmit}>
              <div className='row'>
                  <div className='col-md-10'>
                      <div className='form-group'>
                          <input type='text'
                          placeholder='Recherche'
                          className='form-control my-2 py-4'
                          value={this.state.term}
                          onChange={this.handleInputChange}/>
                      </div>
                  </div>
                  <div className='col-md-2'>
                      <div className='form-group p-3'>
                          <button type='submit' className='btn btn-danger'>
                              <i className='fa fa-search'></i>
                          </button>
                      </div>
                  </div>
              </div>
          </form>
      </div>
    );
  }
}
