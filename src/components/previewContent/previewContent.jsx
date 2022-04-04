import React from 'react';
import styles from './previewContent.module.css';

const PreviewContent = ({card}) => {

    function getStyles(color) {
        switch (color) {
            case 'black':
                return styles.black;
            case 'pink':
                return styles.pink;
            case 'red':
                return styles.red;
        }
    }

    return (
        <li className={`${styles.previewList} ${getStyles(card.color)}`}>
            <div className={styles.previewIMG}>
                <img src={card.img} />
            </div>
            <div className={styles.previewDetail}>
                <h3 className={styles.name}>{card.name}</h3>
                <span className={styles.content}>{card.workplace}</span>
                <span className={styles.content}>{card.position}</span>
                <span className={styles.content}>{card.email}</span>
                <span className={styles.content}>{card.coments}</span>
            </div>
        </li>
    )
};

export default PreviewContent;