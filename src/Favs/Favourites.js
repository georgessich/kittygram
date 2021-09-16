import FavouritesCard from './FavouritesCard';
import classes from './Favourites.module.css';
const Favourites = (props) => {
    return (
        <ul>
        {props.favs.length === 0 && <p className={classes.text}>Вы ещё ничего не добавили...</p>}
            
            {props.favs.map((fav) => (
                <FavouritesCard
                fav={fav}
                key={fav.id}
                id={fav.id}
                url={fav.url} 
                removeFav={props.removeFav}/>
            )

            )}
        </ul>
    )
}

export default Favourites;