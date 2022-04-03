import React from 'react';
import styles from './cardMakerContents.module.css';

const CardMakerContent = ({card}) => {
    return(
        <li className={styles.tableList}>
            <table className={styles.table}>
                <thead className={styles.th}>
                <tr className={styles.table_row}>
                    <th className={styles.table_item} colSpan="2">{card.name}</th>
                    <th className={styles.table_item} colSpan="2">{card.workplace}</th>
                    <th className={styles.table_item} colSpan="2">{card.color}</th>
                </tr>
                </thead>
                <tbody>
                <tr className={styles.table_row}>
                    <td className={styles.table_item} colSpan="3">{card.position}</td>
                    <td className={styles.table_item} colSpan="3">{card.email}</td>
                </tr>
                <tr className={styles.table_row}>
                    <td className={styles.table_item} colSpan="6">{card.coments}</td>
                </tr>
                <tr className={styles.table_row}>
                    <td className={styles.table_item} colSpan="3">{card.name}</td>
                    <td className={styles.table_item} colSpan="3">삭제</td>
                </tr>
                </tbody>
            </table>
        </li>
    )
};

export default CardMakerContent;