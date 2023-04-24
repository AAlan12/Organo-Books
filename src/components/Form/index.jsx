import styles from './styles.module.css';
import Input from '../Input';

function Form() {
    return (
        <section className={styles.container_form}>
            <form>
                <h2>Preencha os dados para criar o card da obra</h2>
                <Input label="Nome" type="text" placeholder="Digite o nome da obra" />
                <Input label="Nome do Autor" type="text" placeholder="Digite o nome do autor" />
                <Input label="Gêneros " type="text" placeholder="Digite o gênero da obra" />
                <Input label="Quantidade de Páginas" type="number" placeholder="Digite a quantidade de páginas" />
            </form>
        </section>
    );
}

export default Form;