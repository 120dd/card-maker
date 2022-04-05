import React, {useRef} from 'react';
import styles from "../cardMakerContent/cardMakerContents.module.css";

const AddForm = ({cards, setCards}) => {
    const inputRef = useRef([]);
    const formRef = useRef();

    const uniqueId = () => {
        return Date.now();
    }

    function addCard(e) {
        e.preventDefault();
        let newCards = [...cards];
        newCards.push({
            id: uniqueId(),
            name: inputRef.current[0].value,
            workplace: inputRef.current[1].value,
            color: inputRef.current[2].value,
            coments: inputRef.current[3].value,
            position: inputRef.current[4].value,
            email: inputRef.current[5].value,
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPo",
        })
        setCards(newCards);
        inputRef.current.map(input => { return input.name !== "color" ? input.value = '' : input.value = 'black'});
    }

    function controlSubmit(e) {
        e.preventDefault();
    }


    return (
        <form className={styles.form} onSubmit={controlSubmit}>
            <div className={styles.firstRow}>
                <input ref={elem => (inputRef.current[0] = elem)} type="text" name="name" placeholder="name" />
                <input ref={elem => (inputRef.current[1] = elem)} type="text" name="workplace" placeholder="workplace" />
                <select name="color" ref={elem => (inputRef.current[2] = elem)} placeholder="color" >
                    <option value="black">black</option>
                    <option value="pink">pink</option>
                    <option value="red">red</option>
                </select>
            </div>
            <div className={styles.secondRow}>
                <input ref={elem => (inputRef.current[3] = elem)} type="text" name="position" placeholder="position" />
                <input ref={elem => (inputRef.current[4] = elem)} type="text" name="email" placeholder="email" />
            </div>
            <div className={styles.thirdRow}>
                <textarea ref={elem => (inputRef.current[5] = elem)} name="coments" placeholder="coment를 적으세요" />
            </div>
            <div className={styles.fourthRow}>
                <button>image upload</button>
                <button onClick={addCard} >Add</button>
            </div>
        </form>
    )
};

export default AddForm;