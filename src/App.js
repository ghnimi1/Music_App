import React from 'react';
import Home from './component/Home';
import Header from './component/widgets/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import detailsAlbums from './component/detailsAlbums';
import FavoritesAlbums from './component/FavoritesAlbums';

function App() {
  return (
    <BrowserRouter>
    <div className="container">       
     <Header/>
      <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/details/:id' exact component={detailsAlbums}/>
         <Route path='/favorites' exact component={FavoritesAlbums}/>
      </Switch>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
