import BookForm from './components/BooksForm'
import BookList from './components/BooksList'
import { useEffect, useState } from 'react';
import type { Livro } from './tipos/Books';
import axios from 'axios';
import './App.css'

const API_URL = "https://crudcrud.com/api/ab0bcea958234bd9a27e36d73b70899a/livros"

function App() {

  const[ livros, setLivros] = useState<Livro[]>([]);

  const removerLivro = (id: string) => {
    setLivros(livros.filter((livro) => livro._id !== id));
};

const adicionarLivro = (livro: Livro) => {
    setLivros([...livros, livro]);
};

  useEffect(() => {
    axios
    .get(API_URL)
    .then((resposta) => {
      console.log(resposta.data);
      setLivros(resposta.data);
    });
  },[]);


  return (
    <>
    <BookForm adicionarLivro={adicionarLivro}/>
    <BookList  livros={livros} removerLivro={removerLivro}/>
    </>
  )
}

export default App
