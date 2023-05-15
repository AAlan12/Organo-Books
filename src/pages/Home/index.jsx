import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { useState } from 'react';
import Category from '../../components/Category';
import Footer from '../../components/Footer';

function Home() {

    const categories = [
        {
            name: "HQ's e Mangás",
            primaryColor: '#6278f7',
            secondaryColor: '#c2cafb'
        },
        {
            name: "Literatura Infantojuvenil",
            primaryColor: '#f9e93e',
            secondaryColor: '#f5eea6'
        },
        {
            name: "Literatura Estrangeira",
            primaryColor: '#F08A5D',
            secondaryColor: '#eeae93'
        },
        {
            name: "Literatura Brasileira",
            primaryColor: '#B83B5E',
            secondaryColor: '#caa7b1'
        },
        {
            name: "Informática",
            primaryColor: '#6A2C70',
            secondaryColor: '#bda8c0'
        },
        {
            name: "Geografia e História",
            primaryColor: '#af7d59',
            secondaryColor: '#b09e8f'
        },
        {
            name: "Administração e Negócios",
            primaryColor: '#d08d61',
            secondaryColor: '#cdb3a1'
        },
        {
            name: "Direito",
            primaryColor: '#f7374a',
            secondaryColor: '#f68590'
        },
        {
            name: "Ciências Biológicas e Medicina",
            primaryColor: '#13bda6',
            secondaryColor: '#81e6d8'
        },
        {
            name: "Ciências Exatas, Engenharia e tecnologia",
            primaryColor: '#40514E',
            secondaryColor: '#94b0ac'
        },
        {
            name: "Religião e Espiritualidade",
            primaryColor: '#0c787b',
            secondaryColor: '#98cfd1'
        },
        {
            name: "Artes",
            primaryColor: '#bd88e8',
            secondaryColor: '#d7beeb'
        },
        {
            name: "Gastronomia",
            primaryColor: '#e1ad5e',
            secondaryColor: '#e4d2b5'
        },
        {
            name: "Autoajuda",
            primaryColor: '#C06C84',
            secondaryColor: '#be909d'
        },
        {
            name: "Esportes e Lazer e Turismo",
            primaryColor: '#6C5B7B',
            secondaryColor: '#a093ab'
        },
        {
            name: "Psicologia",
            primaryColor: '#ab3e80',
            secondaryColor: '#d877b1'
        },
    ]

    const init = [
        {
            name: 'Chainsaw Man #2',
            author: 'Tatsuki Fujimoto',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/chaisaw.jpg?raw=true',
            category: categories[0].name
        },
        {
            name: 'Solo Leveling #3',
            author: 'Chugong e DUBU',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/solo.jpg?raw=true',
            category: categories[0].name
        },
        {
            name: 'Juju Kaisen #0',
            author: 'Gege Akutami',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/juju.jpg?raw=true',
            category: categories[0].name
        },
        {
            name: 'The Witcher: O Último Desejo',
            author: 'Andrzej Sapkowski',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/witcher.jpg?raw=true',
            category: categories[2].name
        },
        {
            name: 'Prince of Thorns',
            author: 'Mark Lawrence',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/prince.jpg?raw=true',
            category: categories[2].name
        },
        {
            name: 'Eldest',
            author: 'Christopher Paolini',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/eldest.jpg?raw=true',
            category: categories[2].name
        },
        {
            name: 'Battle Royale',
            author: 'Koushun Takami',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/battle.jpg?raw=true',
            category: categories[2].name
        },
        {
            name: 'Level UP',
            author: 'Scott Rogers',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/level.jpg?raw=true',
            category: categories[4].name
        },
    ]

    const [books, setBooks] = useState(init)

    const addBook = (book) => {
        setBooks([...books, book])
    }

    return (
        <>
            <Banner />
            <Form categoriesName={categories.map(category => category.name)} registerBook={book => addBook(book)} />

            <section className={styles.categories}>
                <h1>Categorias</h1>
                {categories.map(category =>
                    <Category key={category.name}
                        name={category.name}
                        primaryColor={category.primaryColor}
                        secondaryColor={category.secondaryColor}
                        books={books.filter(book => book.category === category.name)} />
                )}
            </section>
            <Footer/>
        </>
    );
}

export default Home;