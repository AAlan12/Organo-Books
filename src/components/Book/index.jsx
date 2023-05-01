import styles from './styles.module.css';
import Img from '../../assets/img/chaisaw.jpg'

function  Book({ name, authorName, category, img }) {
    return (
        <div className={styles.container_book}>
            <div className={styles.header}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.footer}>
                <h4>{name}</h4>
                <h5>{authorName}</h5>
                <h5>{category}</h5>
            </div>
        </div>
    );
}

export default Book;