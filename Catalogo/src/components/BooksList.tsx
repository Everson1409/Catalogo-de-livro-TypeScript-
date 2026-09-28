import type { Livro } from "../tipos/Books";
import BookItem from "./BooksItem";


type Props = {
    livros : Livro[];
    removerLivro : (id: string) => void;
    
    
};

const BookList = ({livros , removerLivro}: Props) => {

    return(
        <div>
            <h2>Lista de Livros </h2>

            {livros.map((livro) => (
                <BookItem 
                key={livro._id} 
                livro={livro} 
                removerLivro={removerLivro} 
                /> 
            ))}
        </div>
        
    );

};

export default BookList;