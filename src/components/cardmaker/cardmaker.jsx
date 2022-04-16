import React from 'react';
import styles from "./cardmaker.module.css";
import CardMakerContent from "../cardMakerContent/cardMakerContent";
import AddForm from "../addForm/addForm";

const Cardmaker = ({cards, setCards, dataControl, loginedUID, updateUserInfo}) => {

    const addCard = (card) => {
        const newCards = [...cards, card]
        dataControl.writeUserData(loginedUID, newCards);
        updateUserInfo();
    }

    const updateCard = (card) => {
        const newCards = cards.map((item) => {
            return  item.id === card.id ? card : item;
        })
        dataControl.writeUserData(loginedUID, newCards);
        updateUserInfo();
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
                                loginedUID={loginedUID}
                            />
                        )
                    }
                )}
                <AddForm
                    loginedUID={loginedUID}
                    cards={cards}
                    addCard={addCard}
                    dataControl={dataControl}
                />
            </ul>
        </article>
    )
};

export default Cardmaker;