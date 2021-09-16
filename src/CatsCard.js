import { useState } from 'react'
import classes from './CatsCard.module.css';
import CatsCardHeart from './CatsCardHeart';
const CatsCard = (props) => {
    const [ buttonClicked, setButtonClicked ] = useState(false);

    const likeButton = () => {
        props.addFav(props.cat)
        setButtonClicked(true);
    } 
    const removeLike = () => {
        props.removeFav(props.cat)
        setButtonClicked(false);
    }
    return (
        <li className={classes.catscard}>
            <img className={classes.catsimg} src={props.url} alt="cat"/>
            <div className={classes.controls}>
            {!buttonClicked && <button onClick={likeButton} cat={props.cat}> 
                    <CatsCardHeart/>
                </button>}
            {buttonClicked && <button  className={classes.like} onClick={removeLike}> 
                    <CatsCardHeart/>
                </button>}

            </div>
        </li>
    )
}

export default CatsCard;