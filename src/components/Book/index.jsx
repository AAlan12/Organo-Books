import styles from './styles.module.css';

function  Book({ name, authorName, img, categoryColor }) {
    return (
        <div className={styles.container_book} >
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