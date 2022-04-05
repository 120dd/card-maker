import React from 'react';
import styles from "./previewForm.module.css";
import default_logo from '../../assets/default_logo.png';

const PreviewForm = (props) => {
    return(
        <li className={styles.previewList}>
            <div className={styles.previewIMG}>
                <img src={default_logo} />
            </div>
            <div className={styles.previewDetail}>
                <h3 className={styles.name}>name</h3>
                <span className={styles.content}>workplace</span>
                <span className={styles.content}>position</span>
                <span className={styles.content}>email</span>
                <span className={styles.content}>coments</span>
            </div>
        </li>
    )
};

export default PreviewForm;