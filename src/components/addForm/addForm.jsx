import React, {useRef, useState} from 'react';
import default_logo from "../../assets/default_logo.png";
import styles from "../cardMakerContent/cardMakerContents.module.css";
import DataControl from "../../survices/dataControl";

const AddForm = ({cards, setCards, addCard, dataControl, loginedUID}) => {
    const [isImgUploaded, setIsImgUploaded] = useState(false);
    const [imgName, setImgName] = useState('no image');
    const inputRef = useRef([]);
    const formRef = useRef();
    const imgRef = useRef();

    async function onSubmit(e) {
        e.preventDefault();
        let imgUrl = default_logo;

        isImgUploaded !== false && await uploadImg()
            .then(uploadInfo => {
                console.log(uploadInfo);
                imgUrl = uploadInfo.data.url
            })
        const newCard = {
            id: Date.now(),
            name: inputRef.current[0].value,
            workplace: inputRef.current[1].value,
            color: inputRef.current[2].value,
            comments: inputRef.current[3].value,
            email: inputRef.current[4].value,
            position: inputRef.current[5].value,
            img: imgUrl,
            imgFileName: imgName,
        }
        addCard(newCard);
        formRef.current.reset();
        setIsImgUploaded(false);
        setImgName('no image');
    }

    function controlSubmit(e) {
        e.preventDefault();
    }

    const uploadImg = async (e) => {
        const img = imgRef.current.files[0];
        return await dataControl.cldImgUpload(img)
    }

    const onClickUpload = (e) => {
        e.preventDefault();
        imgRef.current.click();
    }

    const chageImgName = (e) => {
        e.preventDefault();
        const imgName = imgRef.current.files[0].name;
        setImgName(imgName);
        setIsImgUploaded(true);
    }

    return (
        <form ref={formRef} className={styles.form} onSubmit={controlSubmit}>
            <div className={styles.firstRow}>
                <input ref={elem => (inputRef.current[0] = elem)} type="text" name="name" placeholder="name"/>
                <input ref={elem => (inputRef.current[1] = elem)} type="text" name="workplace" placeholder="workplace"/>
                <select name="color" ref={elem => (inputRef.current[2] = elem)} placeholder="color">
                    <option value="black">black</option>
                    <option value="pink">pink</option>
                    <option value="red">red</option>
                </select>
            </div>
            <div className={styles.secondRow}>
                <input ref={elem => (inputRef.current[3] = elem)} type="text" name="position" placeholder="position"/>
                <input ref={elem => (inputRef.current[4] = elem)} type="text" name="email" placeholder="email"/>
            </div>
            <div className={styles.thirdRow}>
                <textarea ref={elem => (inputRef.current[5] = elem)} name="comments" placeholder="coment를 적으세요"/>
            </div>
            <div className={styles.fourthRow}>
                <button>
                    <div onClick={onClickUpload} className={styles.uploadLabel}>
                        {isImgUploaded === false ? '이미지 업로드' : imgName}
                    </div>
                    <input
                        name="img"
                        type="file"
                        accept="image/*"
                        ref={imgRef}
                        className="displayNone"
                        onChange={chageImgName}
                    />
                </button>
                <button onClick={onSubmit}>Add</button>
            </div>
        </form>
    )
};

export default AddForm;