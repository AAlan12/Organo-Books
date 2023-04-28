import styles from './styles.module.css';
import Img from '../../assets/img/chaisaw.jpg'

function Book() {
    return (
        <div className={styles.container_book}>
            <div className={styles.header}>
                <img src={Img} alt="" />
            </div>
            <div className={styles.footer}>
                <h4>Chainsaw Man 2</h4>
                <h5>HQ's e Mangás</h5>
            </div>
        </div>
    );
}

export default Book;