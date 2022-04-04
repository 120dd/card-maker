import React from 'react';
import styles from './cardMakerContents.module.css';

const CardMakerContent = ({card}) => {
    return (
        <li className={styles.tableList}>
            <form className={styles.form}>
                <div className={styles.firstRow}>
                    <input type="text" name="name" value={card.name}/>
                    <input type="text" name="workplace" value={card.workplace}/>
                    <select name="color" value={card.color}>
                        <option value="black">black</option>
                        <option value="pink">pink</option>
                        <option value="red">red</option>
                    </select>
                </div>
                <div className={styles.secondRow}>
                    <input type="text" name="position" value={card.position}/>
                    <input type="text" name="email" value={card.email}/>
                </div>
                <div className={styles.thirdRow}>
                    <textarea name="coments" value={card.coments}/>
                </div>
                <div className={styles.fourthRow}>
                    <button>image upload</button>
                    <button>Delete</button>
                </div>
            </form>
        </li>
    )
};

export default CardMakerContent;