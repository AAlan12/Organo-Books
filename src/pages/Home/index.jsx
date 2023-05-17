import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Form from '../../components/Form';
import { useState } from 'react';
import Category from '../../components/Category';
import Footer from '../../components/Footer';
import { v4 as uuidv4 } from 'uuid';

function Home() {

    const [categories, setCategories] = useState([
        {
            id: uuidv4(),
            name: "HQ's e Mangás",
            primaryColor: '#6278f7',
            secondaryColor: '#c2cafb'
        },
        {
            id: uuidv4(),
            name: "Literatura Infantojuvenil",
            primaryColor: '#f9e93e',
            secondaryColor: '#f5eea6'
        },
        {
            id: uuidv4(),
            name: "Literatura Estrangeira",
            primaryColor: '#F08A5D',
            secondaryColor: '#eeae93'
        },
        {
            id: uuidv4(),
            name: "Literatura Brasileira",
            primaryColor: '#B83B5E',
            secondaryColor: '#caa7b1'
        },
        {
            id: uuidv4(),
            name: "Informática",
            primaryColor: '#6A2C70',
            secondaryColor: '#bda8c0'
        },
        {
            id: uuidv4(),
            name: "Geografia e História",
            primaryColor: '#af7d59',
            secondaryColor: '#b09e8f'
        },
        {
            id: uuidv4(),
            name: "Administração e Negócios",
            primaryColor: '#d08d61',
            secondaryColor: '#cdb3a1'
        },
        {
            id: uuidv4(),
            name: "Direito",
            primaryColor: '#f7374a',
            secondaryColor: '#f68590'
        },
        {
            id: uuidv4(),
            name: "Ciências Biológicas e Medicina",
            primaryColor: '#13bda6',
            secondaryColor: '#81e6d8'
        },
        {
            id: uuidv4(),
            name: "Ciências Exatas, Engenharia e tecnologia",
            primaryColor: '#40514E',
            secondaryColor: '#94b0ac'
        },
        {
            id: uuidv4(),
            name: "Religião e Espiritualidade",
            primaryColor: '#0c787b',
            secondaryColor: '#98cfd1'
        },
        {
            id: uuidv4(),
            name: "Artes",
            primaryColor: '#bd88e8',
            secondaryColor: '#d7beeb'
        },
        {
            id: uuidv4(),
            name: "Gastronomia",
            primaryColor: '#e1ad5e',
            secondaryColor: '#e4d2b5'
        },
        {
            id: uuidv4(),
            name: "Autoajuda",
            primaryColor: '#C06C84',
            secondaryColor: '#be909d'
        },
        {
            id: uuidv4(),
            name: "Esportes e Lazer e Turismo",
            primaryColor: '#6C5B7B',
            secondaryColor: '#a093ab'
        },
        {
            id: uuidv4(),
            name: "Psicologia",
            primaryColor: '#ab3e80',
            secondaryColor: '#d877b1'
        },
    ])

    const init = [
        {
            id: uuidv4(),
            name: 'Chainsaw Man #2',
            author: 'Tatsuki Fujimoto',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/chaisaw.jpg?raw=true',
            category: categories[0].name
        },
        {
            id: uuidv4(),
            name: 'Solo Leveling #3',
            author: 'Chugong e DUBU',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/solo.jpg?raw=true',
            category: categories[0].name
        },
        {
            id: uuidv4(),
            name: 'Juju Kaisen #0',
            author: 'Gege Akutami',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/juju.jpg?raw=true',
            category: categories[0].name
        },
        {
            id: uuidv4(),
            name: 'The Witcher: O Último Desejo',
            author: 'Andrzej Sapkowski',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/witcher.jpg?raw=true',
            category: categories[2].name
        },
        {
            id: uuidv4(),
            name: 'Prince of Thorns',
            author: 'Mark Lawrence',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/prince.jpg?raw=true',
            category: categories[2].name
        },
        {
            id: uuidv4(),
            name: 'Eldest',
            author: 'Christopher Paolini',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/eldest.jpg?raw=true',
            category: categories[2].name
        },
        {
            id: uuidv4(),
            name: 'Battle Royale',
            author: 'Koushun Takami',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/battle.jpg?raw=true',
            category: categories[2].name
        },
        {
            id: uuidv4(),
            name: 'Level UP',
            author: 'Scott Rogers',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/level.jpg?raw=true',
            category: categories[4].name
        },
        {
            id: uuidv4(),
            name: 'Contos De Fadas Para Garotas Corajosas',
            author: 'Anita Ganeri',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/contos.jpg?raw=true',
            category: categories[1].name
        },
        {
            id: uuidv4(),
            name: 'Atlas de Anatomia Humana 7ed',
            author: 'Frank H. Frank H. Netter',
            img: 'https://github.com/AAlan12/Organo-Books/blob/main/src/assets/img/atlas.jpg?raw=true',
            category: categories[8].name
        },
    ]

    const [books, setBooks] = useState(init)

    const addBook = (book) => {
        setBooks([...books, book])
    }

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <>
            <Banner />
            <Form categories={categories.map(category => category.name)} registerBook={book => addBook(book)} />

            <section className={styles.categories}>
                <h1>Categorias</h1>
                {categories.map((category, index) =>
                    <Category key={index}
                        category={category}
                        books={books.filter(book => book.category === category.name)} 
                        onDelete={deleteBook}
                        />
                )}
            </section>
            <Footer/>
        </>
    );
}

export default Home;