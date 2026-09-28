import axios from "axios";
import React, { useState } from "react";
import type { Livro } from "../tipos/Books";
import styles from "./BooksForm.module.css";

type Props = {
    adicionarLivro: (livro: Livro) => void
}

const API_URL = "https://crudcrud.com/api/ab0bcea958234bd9a27e36d73b70899a/livros"

const BookForm = ({adicionarLivro}: Props) => {

    const [titulo , setTitulo] = useState('');
    const [autor , setAutor] = useState('');
    const [status , setStatus] = useState('nao-lido');

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

     

        const livro = {
            titulo: titulo,
            autor: autor,
            status: status
        };

    try {
         const resposta = await axios.post(API_URL, livro);

    adicionarLivro(resposta.data);

    setTitulo('');
    setAutor('');
    setStatus('nao-lido');
    } catch(erro){
        console.log("Erro ao cadastrar livro:", erro);
    }
  
    };

    return(
        <form onSubmit={handleSubmit} className={styles.formulario}>
            <h2>Cadastrar Livros</h2>

            <label>Titulo</label>
            <input 
            type="text" 
            placeholder="Digite o titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className={styles.input}
            />

            <label>Autor</label>
            <input 
            type="text"
            placeholder="Digite o Autor"
            value={autor} 
            onChange={(e) => setAutor(e.target.value)}
            className={styles.input}
             />

            <label>Status</label>
             <select
             value={status}
             onChange={(e) => setStatus(e.target.value)}
             className={styles.select}>
            

                <option value="nao-lido">Não lido</option>
                <option value= "lido">Lido</option>
             </select>

             <button type="submit">Adicionar</button>
        </form>
    )
}

export default BookForm;