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
                {books.map( book => <Book name={book.nome} authorName={book.nomeAutor} category={book.categoria} img={book.img} />)}
            </section>
        </>
    );
}

export default Category;