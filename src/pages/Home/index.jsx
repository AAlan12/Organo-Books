import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Input from '../../components/Input';

function Home() {
    return (
        <>
            <Banner />
            <Input label="Nome" type="text" placeholder="Digite o nome da obra" />
            <Input label="Nome do Autor" type="text" placeholder="Digite o nome do autor" />
            <Input label="Gêneros " type="text" placeholder="Digite o gênero da obra" />
            <Input label="Quantidade de Páginas" type="number" placeholder="Digite a quantidade de páginas" />
        </>
    );
}

export default Home;