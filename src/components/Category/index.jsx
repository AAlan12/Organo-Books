import styles from './styles.module.css';

function Category({ nome, corPrimaria, corSecundaria }) {
    
    const ccs = { backgroundColor: corSecundaria }

    return (
        <>
            <section className={styles.container_category} style={{ backgroundColor: corSecundaria }}>
                <h3 style={{ borderColor: corPrimaria }}>
                    {nome}
                </h3>
            </section>
        </>
    );
}

export default Category;