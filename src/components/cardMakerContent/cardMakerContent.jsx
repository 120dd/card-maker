import React, {useRef} from 'react';
import styles from './cardMakerContents.module.css';

const CardMakerContent = ({card, cards, setCards, }) => {
    const nameRef = useRef([]);

    function controlSubmit(e) {
        e.preventDefault();
    }

    const onDelete = (e) => {
        let newCards = cards.filter(data => data.id !== card.id );
        setCards(newCards);
    }

    const onChange = (e) => {
        console.log(nameRef.current.value);
    }

    return (
        <li className={styles.tableList}>
            <form className={styles.form} onSubmit={controlSubmit}>
                <div className={styles.firstRow}>
                    <input onChange={onChange} ref={nameRef} type="text" name="name" defaultValue={card.name}/>
                    <input type="text" name="workplace" defaultValue={card.workplace}/>
                    <select name="color" defaultValue={card.color}>
                        <option defaultValue="black">black</option>
                        <option defaultValue="pink">pink</option>
                        <option defaultValue="red">red</option>
                    </select>
                </div>
                <div className={styles.secondRow}>
                    <input type="text" name="position" defaultValue={card.position}/>
                    <input type="email" name="email" defaultValue={card.email}/>
                </div>
                <div className={styles.thirdRow}>
                    <textarea name="coments" defaultValue={card.coments}/>
                </div>
                <div className={styles.fourthRow}>
                    <button>image upload</button>
                    <button onClick={onDelete} >Delete</button>
                </div>
            </form>
        </li>
    )
};

export default CardMakerContent;