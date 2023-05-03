import styles from './styles.module.css';
import Input from '../Input';
import Lists from '../Lists';
import Buttons from '../Buttons';
import { useState } from 'react';

function Form({ registerBooks, categoriesName }) {

    const [name, setName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [numberPgs, setNumberPgs] = useState('')
    const [img, setImg] = useState('')
    const [category, setCategory] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        registerBooks({
            name,
            authorName,
            numberPgs,
            img,
            category
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
                            val={name}
                            onChanged={val => setName(val)} 
                    />
                    <Input  mandatory={true} 
                            label="Nome do Autor" 
                            type="text" 
                            placeholder="Digite o nome do autor" 
                            val={authorName}
                            onChanged={val => setAuthorName(val)}
                    />
                    <Input  mandatory={true} 
                            label="Quantidade de Páginas" 
                            type="number" 
                            placeholder="Digite a quantidade de páginas"
                            val={numberPgs}
                            onChanged={val => setNumberPgs(val)} 
                    />
                    <Input  label="Imagem" 
                            type="url" 
                            placeholder="Digite o endereço da imagem"
                            val={img}
                            onChanged={val => setImg(val)} 
                    />
                    <Lists  mandatory={true} 
                            label="Categorias" 
                            itens={categoriesName} 
                            val={category}
                            onChanged={val => setCategory(val)}
                    />
                    <Buttons txt="Criar Card" />
                </form>
            </section>
        </>
    );
}

export default Form;