import Book from '../Book';
import styles from './styles.module.css';

function Category({ name, primaryColor, secondaryColor, books }) {

    const ccs = { backgroundColor: secondaryColor }

    return (
        <>
            <section className={styles.container_category} style={{ backgroundColor: secondaryColor }}>
                <h3 style={{ borderColor: primaryColor }}>
                    {name}
                </h3>
                <div className={styles.container_books}>
                    {books.map(book => 
                        <Book name={book.name}
                            authorName={book.authorName}
                            img={book.img}
                    />)}
                </div>
            </section>
        </>
    );
}

export default Category;