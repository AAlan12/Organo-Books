import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { useState } from 'react';

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
        </>
    );
}

export default Home;