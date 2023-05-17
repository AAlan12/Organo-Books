import Book from '../Book';
import styles from './styles.module.css';

function Category({ category, books, onDelete }) {

    const ccs = { backgroundColor: category.secondaryColor }

    return (
        <>
            <section className={styles.container_category} style={{ backgroundColor: category.secondaryColor }}>
                <h3 style={{ borderColor: category.primaryColor }}>
                    {category.name}
                </h3>
                <div className={styles.container_books}>
                    {books.map((book, index) => {
                        return <Book
                            key={index}
                            book={book}
                            categoryColor={category.primaryColor}
                            onDelete={onDelete}
                        />
                    })}
                </div>
            </section>
        </>
    );
}

export default Category;