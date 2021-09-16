import classes from './FavouritesCard.module.css';

const FavouritesCard = (props) => {
    return (
        <li className={classes.container}>
            <img className={classes.img} src={props.url} alt='cat' />
            <div onClick={() => props.removeFav(props.fav)} className={classes.overlay}>Убрать из избранного</div>
        </li>
    )
}

export default FavouritesCard;