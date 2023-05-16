import styles from './styles.module.css';
import { AiFillCloseCircle } from 'react-icons/ai';

function  Book({ name, authorName, img, categoryColor, onDelete }) {
    return (
        <div className={styles.container_book} >
            <AiFillCloseCircle size={25} className={styles.delete} onClick={onDelete} />
            <div className={styles.header} style={{ backgroundColor: categoryColor }}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.footer}>
                <h4 style={{ color: categoryColor  }}>
                    {name}
                </h4>
                <h5>{authorName}</h5>
            </div>
        </div>
    );
}

export default Book;