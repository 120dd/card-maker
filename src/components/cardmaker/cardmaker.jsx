import React from 'react';
import styles from "./cardmaker.module.css";
import CardMakerContent from "../cardMakerContent/cardMakerContent";
import AddForm from "../addForm/addForm";

const Cardmaker = ({cards, setCards, dataControl,}) => {
    console.log(cards);

    const addCard = (card) => {
        const newCards = [...cards, card]
        setCards(newCards);
    }

    const updateCard = (card) => {
        const newCards = cards.map((item) => {
            return  item.id === card.id ? card : item;
        })
        setCards(newCards);
    }

    return (
        <article className={styles.cardMaker}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul className={styles.makeForm}>
                {cards.map((card) => {
                        return (
                            <CardMakerContent
                                key={card.id}
                                card={card}
                                cards={cards}
                                setCards={setCards}
                                updateCard={updateCard}
                                dataControl={dataControl}
                            />
                        )
                    }
                )}
                {/*<AddForm cards={cards} setCards={setCards} />*/}
                <AddForm
                    cards={cards}
                    addCard={addCard}
                    dataControl={dataControl}
                />
            </ul>
        </article>
    )
};

export default Cardmaker;