import styles from './styles.module.css';

function Category({ nome }) {
  return (
    <>
        <section className={styles.container_category}>
            <h3>
                {nome}
            </h3>
        </section>
    </>
  );
}

export default Category;