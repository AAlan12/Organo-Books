import styles from './styles.module.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function  Book({ book, categoryColor, onDelete, onFav }) {

     const favAction = () => {
        onFav(book.id);
     }

     const propsFav = {
        size: 25,
        onClick: favAction
     }

    return (
        <div className={styles.container_book} >
            <AiFillCloseCircle 
                size={25} 
                className={styles.delete} 
                onClick={() => onDelete(book.id)} />
            <div className={styles.header} style={{ backgroundColor: categoryColor }}>
                <img src={book.img} alt={book.name} />
            </div>
            <div className={styles.footer}>
                <h4 style={{ color: categoryColor  }}>
                    {book.name}
                </h4>
                <h5>{book.authorName}</h5>
                <div className={styles.fav}>
                    {book.fav 
                        ? <AiFillHeart {...propsFav} color='#CF0A0A' /> 
                        : <AiOutlineHeart {...propsFav} />}
                </div>
            </div>
        </div>
    );
}

export default Book;