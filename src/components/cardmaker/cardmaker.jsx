import React from 'react';
import styles from "./cardmaker.module.css";
import CardMakerContent from "../cardMakerContent/cardMakerContent";
import AddForm from "../addForm/addForm";

const Cardmaker = ({cards, setCards}) => {
    console.log(cards);
    return (
        <article className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul className={styles.makeForm}>
                {cards.map((card) => {
                        return (
                            <CardMakerContent key={card.id} card={card} cards={cards} setCards={setCards}/>
                        )
                    }
                )}
                <AddForm cards={cards} setCards={setCards} />
            </ul>
        </article>
    )
};

export default Cardmaker;