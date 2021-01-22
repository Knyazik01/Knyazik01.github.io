import React from 'react'
import styles from './CardFront.module.scss'

function CardFront(props) {

    const {title, voteAverage, imageSrc} = props.frontData;
    // console.log(props);

    return (
        // <div className={styles.houseItem + ' col-12 col-md-6 m-0'}>
        // <div className='card'>
        <div className={styles.card}>
            <img src={`https:\\image.tmdb.org/t/p/w500${imageSrc[0] || imageSrc[1]}`} alt="house1.png" className={styles.card__picture}/>

            <div className={styles.card__text}>
                <h3 className={styles.card__title}>{title}</h3>
                <p>Vote average: <b>{voteAverage}</b></p>
            </div>
        </div>
    );
}


export default CardFront;