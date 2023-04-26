import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { useState } from 'react';
import Category from '../../components/Category';

function Home() {

    const [livros, setLivros] =useState([])

    const addLivro = (livro) => {
        console.log(livro)
        setLivros([...livros, livro])
    }

    return (
        <>
            <Banner />
            <Form registerLivro={livro => addLivro(livro)} />
            <Category nome="HQ's e Mangás" />
            <Category nome="Literatura Infantojuvenil" />
            <Category nome="Literatura Estrangeira" />
        </>
    );
}

export default Home;