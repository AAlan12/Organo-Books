import styles from './styles.module.css';
import Input from '../Input';
import Lists from '../Lists';
import Buttons from '../Buttons';
import { useState } from 'react';

function Form({ registerLivro }) {

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
        "Gastronomia",
        "Autoajuda",
        "Artes",
        "Esportes e Lazer e Turismo",
        "Psicologia",
    ]

    const [nome, setNome] = useState('')
    const [nomeAutor, setNomeAutor] = useState('')
    const [quantidadePgs, setQuantidadePgs] = useState('')
    const [img, setImg] = useState('')
    const [categoria, setCategoria] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        registerLivro({
            nome,
            nomeAutor,
            quantidadePgs,
            img,
            categoria
        })
    }

    return (
        <>
            <section className={styles.container_form}>
                <form onSubmit={onSave}>
                    <h2>Preencha os dados para criar o card da obra</h2>
                    <Input  mandatory={true} 
                            label="Nome" 
                            type="text"
                            placeholder="Digite o nome da obra"
                            val={nome}
                            onChanged={val => setNome(val)} 
                    />
                    <Input  mandatory={true} 
                            label="Nome do Autor" 
                            type="text" 
                            placeholder="Digite o nome do autor" 
                            val={nomeAutor}
                            onChanged={val => setNomeAutor(val)}
                    />
                    <Input  mandatory={true} 
                            label="Quantidade de Páginas" 
                            type="number" 
                            placeholder="Digite a quantidade de páginas"
                            val={quantidadePgs}
                            onChanged={val => setQuantidadePgs(val)} 
                    />
                    <Input  label="Imagem" 
                            type="image" 
                            placeholder="Digite o endereço da imagem"
                            val={img}
                            onChanged={val => setImg(val)} 
                    />
                    <Lists  mandatory={true} 
                            label="Categorias" 
                            itens={categories} 
                            val={categoria}
                            onChanged={val => setCategoria(val)}
                    />
                    <Buttons txt="Criar Card" />
                </form>
            </section>
        </>
    );
}

export default Form;