import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout';
import CatsCards from './CatsCards';
import Favourites from './Favs/Favourites';
function App() {

  const [ favourites, setFavourites ] = useState([]);

  useEffect(() => {
    const catsFavourites = JSON.parse(
      localStorage.getItem('cats-fav')
    )
    setFavourites(catsFavourites)
  }, [])

  const addToLocalStorage = (cats) => {
    localStorage.setItem('cats-fav', JSON.stringify(cats))
  }

  const addCatToFavourites = (item) => {
    let newFavourites = [...(favourites || []), item];

    // if (newFavourites.length === 0) {
    //   newFavourites.push(cat);
    // } else {
    //   newFavourites = [...favourites, cat]
    // }

    // const newFavourites = [...favourites, cat];
    setFavourites(newFavourites);
    console.log(newFavourites);
    addToLocalStorage(newFavourites);
  }

  const removeCatFromFavourites = (cat) => {
    let newFavourites = favourites.filter(
      (favourite) => favourite.id !== cat.id
    )
    setFavourites(newFavourites);
    addToLocalStorage(newFavourites);
    console.log(newFavourites);
  }
  return (
      <Layout>
        <Switch>
          <Route path='/kittygram/' exact>
            <CatsCards addFav={addCatToFavourites} removeFav={removeCatFromFavourites}/>
          </Route>
          <Route path='/kittygram/favs'>
            <Favourites favs={favourites} removeFav={removeCatFromFavourites}/>
          </Route>
        </Switch>
      </Layout>
   
  );
}


export default App;
