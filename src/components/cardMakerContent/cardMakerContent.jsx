import React, {useRef, useState} from 'react';
import styles from './cardMakerContents.module.css';

const CardMakerContent = ({card, cards, setCards, updateCard, dataControl, loginedUID}) => {
    const [loading, setLoading] = useState(false);
    const nameRef = useRef();
    const workPlaceRef = useRef();
    const colorRef = useRef();
    const positionRef = useRef();
    const emailRef = useRef();
    const commentsRef = useRef();
    const inputFile = useRef();

    const onDelete = (e) => {
        let newCards = cards.filter(data => data.id !== card.id);
        dataControl.writeUserData(loginedUID, newCards);
    }

    const onChange = (e) => {
        e.preventDefault();
        const newCard = {...card, [e.currentTarget.name]: e.currentTarget.value};
        updateCard(newCard);
    }

    const onUpload = (e) => {
        e.preventDefault();
        inputFile.current.click();
    }

    const onChangeImg = async (e) => {
        e.preventDefault();
        setLoading(true);
        const img = inputFile.current.files[0];
        const imgName = inputFile.current.files[0].name;
        const result = await dataControl.cldImgUpload(img);
        setLoading(false);
        const url = result.data.url;
        const newCard = {...card, ["img"]: url, [`imgFileName`]: imgName};
        updateCard(newCard);
    }

    return (
        <li className={styles.tableList}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.firstRow}>
                    <input onChange={onChange} ref={nameRef} type="text" name="name" value={card.name}/>
                    <input onChange={onChange} ref={workPlaceRef} type="text" name="workplace" value={card.workplace}/>
                    <select onChange={onChange} ref={colorRef} name="color" value={card.color}>
                        <option value="black">black</option>
                        <option value="pink">pink</option>
                        <option value="red">red</option>
                    </select>
                </div>
                <div className={styles.secondRow}>
                    <input onChange={onChange} ref={positionRef} type="text" name="position" value={card.position}/>
                    <input onChange={onChange} ref={emailRef} type="email" name="email" value={card.email}/>
                </div>
                <div className={styles.thirdRow}>
                    <textarea onChange={onChange} ref={commentsRef} name="comments" value={card.comments}/>
                </div>
                <div className={styles.fourthRow}>
                    <button>
                        <div onClick={onUpload} className={styles.uploadLabel}>
                            {loading === true ? "로딩중..." : card.imgFileName}
                        </div>
                        <input
                            name="img"
                            type="file"
                            accept="image/*"
                            ref={inputFile}
                            className="displayNone"
                            onChange={onChangeImg}
                        />
                    </button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            </form>
        </li>
    )
};

export default CardMakerContent;