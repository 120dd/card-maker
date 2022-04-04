import React from 'react';
import styles from './cardPreview.module.css';
import PreviewContent from "../previewContent/previewContent";

const CardPreview = ({cards}) => {
    return (
        <section className={styles.cardPreview}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul className={styles.previewList}>
                {cards.map((card)=>{
                    return(
                        <PreviewContent key={card.number} card={card} />
                    )
                })}
            </ul>
        </section>
    )
};

export default CardPreview;