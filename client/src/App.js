import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './components/essentials/Not found/Notfound';
import { Login } from './pages/Login';
import Movies from './pages/Movies';
import Player from './pages/Player';
import { Signin } from './pages/Signin';
import { Stremzee } from './pages/Stremzee';
import TvShows from './pages/TvShows';
import UserLiked from './pages/UserLiked';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/player' element={<Player/>}/>
      <Route exact path='/movies' element={<Movies/>}/>
      <Route exact path='/tvshows' element={<TvShows/>}/>
      <Route exact path='/mylist' element={<UserLiked/>}/>
      <Route path='/' element={<Stremzee/>}/>
      <Route path='/not-found' element={<Notfound/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
