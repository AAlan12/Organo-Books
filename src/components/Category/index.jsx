import Book from '../Book';
import styles from './styles.module.css';

function Category({ name, primaryColor, secondaryColor, books, onDelete }) {

    const ccs = { backgroundColor: secondaryColor }

    return (
        <>
            <section className={styles.container_category} style={{ backgroundColor: secondaryColor }}>
                <h3 style={{ borderColor: primaryColor }}>
                    {name}
                </h3>
                <div className={styles.container_books}>
                    {books.map(book => {
                        return <Book
                            key={book.name}
                            name={book.name}
                            categoryColor={primaryColor}
                            authorName={book.authorName}
                            img={book.img}
                            onDelete={onDelete}
                        />
                    })}
                </div>
            </section>
        </>
    );
}

export default Category;