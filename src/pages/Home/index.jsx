import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { useState } from 'react';
import Category from '../../components/Category';

function Home() {

    const categories = [
        {
            d: "HQ's e Mangás" ,
            primaryColor: '#6278f7',
            secondaryColor: '#7387f8'
        },
        {
            d: "Literatura Infantojuvenil" ,
            primaryColor: '#F9ED69',
            secondaryColor: '#f7ec7a'
        },
        {
            d: "Literatura Estrangeira" ,
            primaryColor: '#F08A5D',
            secondaryColor: '#ef926b'
        },
        {
            name: "Literatura Brasileira" ,
            primaryColor: '#B83B5E',
            secondaryColor: '#ba4667'
        },
        {
            name: "Informática" ,
            primaryColor: '#6A2C70',
            secondaryColor: '#6b3370'
        },
        {
            name: "Geografia e História" ,
            primaryColor: '#AD8B73',
            secondaryColor: '#af9480'
        },
        {
            name: "Administração e Negócios" ,
            primaryColor: '#CEAB93',
            secondaryColor: '#cdb3a1'
        },
        {
            name: "Direito" ,
            primaryColor: '#E3CAA5',
            secondaryColor: '#e4d2b5'
        },
        {
            name: "Ciências Biológicas e Medicina" ,
            primaryColor: '#CCA8E9',
            secondaryColor: '#d7beeb'
        },
        {
            name: "Ciências Exatas, Engenharia e tecnologia" ,
            primaryColor: '#30E3CA',
            secondaryColor: '#40e6cf'
        },
        {
            name: "Religião e Espiritualidade" ,
            primaryColor: '#11999E',
            secondaryColor: '#1d999d'
        },
        {
            name: "Artes" ,
            primaryColor: '#40514E',
            secondaryColor: '#475351'
        },
        {
            name: "Gastronomia" ,
            primaryColor: '#F67280',
            secondaryColor: '#f68590'
        },
        {
            name: "Autoajuda" ,
            primaryColor: '#C06C84',
            secondaryColor: '#c1778c'
        },
        {
            name: "Esportes e Lazer e Turismo" ,
            primaryColor: '#6C5B7B',
            secondaryColor: '#71647d'
        },
        {
            name: "Psicologia" ,
            primaryColor: '#D864A9',
            secondaryColor: '#d877b1'
        },
    ]

    const [books, setBooks] =useState([])

    const addBook = (book) => {
        console.log(book)
        setBooks([...books, book])
    }

    return (
        <>
            <Banner />
            <Form categoriesName= {categories.map(category => category.name)} registerBooks={book => addBook(book)} />
            {categories.map(category =>
                 <Category  key={category.name} 
                            name={category.name} 
                            primaryColor={category.primaryColor} 
                            secondaryColor={category.secondaryColor}
                            books={books} />)}
        </>
    );
}

export default Home;