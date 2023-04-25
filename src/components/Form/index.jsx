import styles from './styles.module.css';
import Input from '../Input';
import Lists from '../Lists';

function Form() {

    const categories = [
        "HQ's e Mangás",
        "Literatura Infantojuvenil",
        "Literatura Estrangeira",
        "Literatura Brasileira",
        "Informática",
        "Geografia e História",
        "Administração e Negócios",
        "Direito",
        "Ciências Biológicas e Medicina",
        "Ciências Exatas, Engenharia e tecnologia",
        "Religião e Espiritualidade",
        "Artes",
        "Gastronomia",
        "Autoajuda",
        "Artes",
        "Esportes e Lazer e Turismo",
        "Psicologia",
    ]


    return (
        <section className={styles.container_form}>
            <form>
                <h2>Preencha os dados para criar o card da obra</h2>
                <Input label="Nome" type="text" placeholder="Digite o nome da obra" />
                <Input label="Nome do Autor" type="text" placeholder="Digite o nome do autor" />
                <Input label="Quantidade de Páginas" type="number" placeholder="Digite a quantidade de páginas" />
                <Lists label="Categorias" itens={categories}/>
            </form>
        </section>
    );
}

export default Form;