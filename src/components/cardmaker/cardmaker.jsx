import React from 'react';
import styles from "./cardmaker.module.css";
import CardMakerContent from "../cardMakerContent/cardMakerContent";

const Cardmaker = ({cards}) => {
    console.log(cards);
    return(
        <article className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
                {cards.map((card)=>{
                    return(
                        <CardMakerContent key={card.number} card={card} />
                    )
                    }
                )}
            </ul>

        </article>
    )
};

export default Cardmaker;