import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { useState } from 'react';
import Category from '../../components/Category';

function Home() {

    const categories = [
        {
            nome: "HQ's e Mangás" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Literatura Infantojuvenil" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Literatura Estrangeira" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Literatura Brasileira" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Informática" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Geografia e História" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Administração e Negócios" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Direito" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Ciências Biológicas e Medicina" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Ciências Exatas, Engenharia e tecnologia" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Religião e Espiritualidade" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Artes" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Gastronomia" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Autoajuda" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Artes" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Esportes e Lazer e Turismo" ,
            corPrimaria: '',
            corSecundaria: ''
        },
        {
            nome: "Psicologia" ,
            corPrimaria: '',
            corSecundaria: ''
        },
    ]

    const [livros, setLivros] =useState([])

    const addLivro = (livro) => {
        console.log(livro)
        setLivros([...livros, livro])
    }

    return (
        <>
            <Banner />
            <Form registerLivro={livro => addLivro(livro)} />
            {categories.map(category => <Category key={category.nome} nome={category.nome} />)}
        </>
    );
}

export default Home;