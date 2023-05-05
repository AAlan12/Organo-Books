import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { useState } from 'react';
import Category from '../../components/Category';

function Home() {

    const categories = [
        {
            name: "HQ's e Mangás" ,
            primaryColor: '#6278f7',
            secondaryColor: '#c2cafb'
        },
        {
            name: "Literatura Infantojuvenil" ,
            primaryColor: '#f9e93e',
            secondaryColor: '#f5eea6'
        },
        {
            name: "Literatura Estrangeira" ,
            primaryColor: '#F08A5D',
            secondaryColor: '#eeae93'
        },
        {
            name: "Literatura Brasileira" ,
            primaryColor: '#B83B5E',
            secondaryColor: '#caa7b1'
        },
        {
            name: "Informática" ,
            primaryColor: '#6A2C70',
            secondaryColor: '#bda8c0'
        },
        {
            name: "Geografia e História" ,
            primaryColor: '#af7d59',
            secondaryColor: '#b09e8f'
        },
        {
            name: "Administração e Negócios" ,
            primaryColor: '#d08d61',
            secondaryColor: '#cdb3a1'
        },
        {
            name: "Direito" ,
            primaryColor: '#e1ad5e',
            secondaryColor: '#e4d2b5'
        },
        {
            name: "Ciências Biológicas e Medicina" ,
            primaryColor: '#bd88e8',
            secondaryColor: '#d7beeb'
        },
        {
            name: "Ciências Exatas, Engenharia e tecnologia" ,
            primaryColor: '#13bda6',
            secondaryColor: '#81e6d8'
        },
        {
            name: "Religião e Espiritualidade" ,
            primaryColor: '#0c787b',
            secondaryColor: '#98cfd1'
        },
        {
            name: "Artes" ,
            primaryColor: '#40514E',
            secondaryColor: '#94b0ac'
        },
        {
            name: "Gastronomia" ,
            primaryColor: '#f7374a',
            secondaryColor: '#f68590'
        },
        {
            name: "Autoajuda" ,
            primaryColor: '#C06C84',
            secondaryColor: '#be909d'
        },
        {
            name: "Esportes e Lazer e Turismo" ,
            primaryColor: '#6C5B7B',
            secondaryColor: '#a093ab'
        },
        {
            name: "Psicologia" ,
            primaryColor: '#ab3e80',
            secondaryColor: '#d877b1'
        },
    ]

    const [books, setBooks] =useState([])

    const addBook = (book) => {
        setBooks([...books, book])
    }

    return (
        <>
            <Banner />
            <Form categoriesName= {categories.map(category => category.name)} registerBook={book => addBook(book)} />

            {categories.map(category =>
                 <Category  key={category.name} 
                            name={category.name} 
                            primaryColor={category.primaryColor} 
                            secondaryColor={category.secondaryColor}
                            books={books.filter(book => book.category === category.name)} />)}
        </>
    );
}

export default Home;