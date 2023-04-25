import styles from './styles.module.css';
import Input from '../Input';
import Lists from '../Lists';
import Buttons from '../Buttons';

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

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className={styles.container_form}>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card da obra</h2>
                <Input mandatory={true} label="Nome" type="text" placeholder="Digite o nome da obra" />
                <Input mandatory={true} label="Nome do Autor" type="text" placeholder="Digite o nome do autor" />
                <Input mandatory={true} label="Quantidade de Páginas" type="number" placeholder="Digite a quantidade de páginas" />
                <Lists mandatory={true} label="Categorias" itens={categories}/>
                <Buttons txt="Criar Card" />
            </form>
        </section>
    );
}

export default Form;