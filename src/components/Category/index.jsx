import Book from '../Book';
import styles from './styles.module.css';

function Category({ nome, corPrimaria, corSecundaria, books }) {

    const ccs = { backgroundColor: corSecundaria }

    return (
        <>
            <section className={styles.container_category} style={{ backgroundColor: corSecundaria }}>
                <h3 style={{ borderColor: corPrimaria }}>
                    {nome}
                </h3>
                <div className={styles.container_books}>
                    {books.map(book => 
                        <Book name={book.nome}
                            authorName={book.nomeAutor}
                            img={book.img}
                    />)}
                </div>
            </section>
        </>
    );
}

export default Category;