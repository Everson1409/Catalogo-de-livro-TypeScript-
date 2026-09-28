import type { Livro } from "../tipos/Books";
import axios from "axios"

const API_URL = "https://crudcrud.com/api/ab0bcea958234bd9a27e36d73b70899a/livros"

type Props = {
    livro: Livro;
    removerLivro: (id: string) => void;
    
};

const BookItem = ({ livro, removerLivro }: Props) => {

    const handleDelete = async () =>{
          try {
     
        await axios.delete(`${API_URL}/${livro._id}`);

        removerLivro(livro._id!);

    } catch (erro) {
        console.log("Erro ao excluir:", erro);
    }
      

    };

    return(
        <div>
            <h3>{livro.titulo}</h3>
            <p>{livro.autor}</p>
            <p>{livro.status}</p>

            <button onClick={handleDelete}>Excluir</button>
        </div>
    );

};

export default BookItem;