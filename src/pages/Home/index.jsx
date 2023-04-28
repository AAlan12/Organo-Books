import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { useState } from 'react';
import Category from '../../components/Category';

function Home() {

    const categories = [
        {
            nome: "HQ's e Mangás" ,
            corPrimaria: '#6278f7',
            corSecundaria: '#7387f8'
        },
        {
            nome: "Literatura Infantojuvenil" ,
            corPrimaria: '#F9ED69',
            corSecundaria: '#f7ec7a'
        },
        {
            nome: "Literatura Estrangeira" ,
            corPrimaria: '#F08A5D',
            corSecundaria: '#ef926b'
        },
        {
            nome: "Literatura Brasileira" ,
            corPrimaria: '#B83B5E',
            corSecundaria: '#ba4667'
        },
        {
            nome: "Informática" ,
            corPrimaria: '#6A2C70',
            corSecundaria: '#6b3370'
        },
        {
            nome: "Geografia e História" ,
            corPrimaria: '#AD8B73',
            corSecundaria: '#af9480'
        },
        {
            nome: "Administração e Negócios" ,
            corPrimaria: '#CEAB93',
            corSecundaria: '#cdb3a1'
        },
        {
            nome: "Direito" ,
            corPrimaria: '#E3CAA5',
            corSecundaria: '#e4d2b5'
        },
        {
            nome: "Ciências Biológicas e Medicina" ,
            corPrimaria: '#CCA8E9',
            corSecundaria: '#d7beeb'
        },
        {
            nome: "Ciências Exatas, Engenharia e tecnologia" ,
            corPrimaria: '#30E3CA',
            corSecundaria: '#40e6cf'
        },
        {
            nome: "Religião e Espiritualidade" ,
            corPrimaria: '#11999E',
            corSecundaria: '#1d999d'
        },
        {
            nome: "Artes" ,
            corPrimaria: '#40514E',
            corSecundaria: '#475351'
        },
        {
            nome: "Gastronomia" ,
            corPrimaria: '#F67280',
            corSecundaria: '#f68590'
        },
        {
            nome: "Autoajuda" ,
            corPrimaria: '#C06C84',
            corSecundaria: '#c1778c'
        },
        {
            nome: "Esportes e Lazer e Turismo" ,
            corPrimaria: '#6C5B7B',
            corSecundaria: '#71647d'
        },
        {
            nome: "Psicologia" ,
            corPrimaria: '#D864A9',
            corSecundaria: '#d877b1'
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
            <Form categoriasNome= {categories.map(category => category.nome)} registerLivro={livro => addLivro(livro)} />
            {categories.map(category =>
                 <Category  key={category.nome} 
                            nome={category.nome} 
                            corPrimaria={category.corPrimaria} 
                            corSecundaria={category.corSecundaria} />)}
        </>
    );
}

export default Home;