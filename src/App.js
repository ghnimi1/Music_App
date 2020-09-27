import React, { useEffect, useState } from 'react';
import Home from './component/Home';
import Header from './component/widgets/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import detailsAlbums from './component/detailsAlbums';
import FavoritesAlbums from './component/FavoritesAlbums';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css'
import { tokenlogin } from './services/auth';

function App() {

  const [signedIn, setSignedIn] = useState(false)
  const click = async () => {

    var token = await localStorage.getItem("TOKEN");
    if (token) {
      const data = await tokenlogin()
      if (data.data.success) {
        setSignedIn(true);
        localStorage.setItem("TOKEN", data.data.response.token);
        localStorage.setItem("USERID", data.data.response.userId);
      }
    }
    }

  useEffect(() => {
    click()
  }, [])
  return (
    <BrowserRouter>
      <div className="container">
        {signedIn ? <Header  />:null}
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/details/:id' exact component={detailsAlbums} />
          <Route path='/favorites' exact component={FavoritesAlbums} />
          <Redirect to='/login'/>
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
