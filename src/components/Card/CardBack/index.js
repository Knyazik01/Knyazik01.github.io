import React from 'react'
import styles from './CardBack.module.scss'

function CardBack(props) {
// console.log(props);
const cardDescription = props.backData.description;
    return (
        <div className={styles.CardBackBlock}>
            <div className="description">
                {cardDescription.length > 300 ? `${cardDescription.slice(0, 297)}...` : cardDescription}
            </div>
            <a href='https://knyazik01-cv.netlify.app/' className={styles.CardBackBlock__link}>See more</a>
        </div>
    );
}


export default CardBack;
