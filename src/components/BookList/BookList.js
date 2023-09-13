
import { useState } from "react";
import BookItem from "./BookItem";
import BooksFilter from "./BooksFilter";

function Books ({ books }) {
    return (
        <> {/* <React.Fragment> */} {/* Crear un elemento padre en el VDOM sin generar un elemento en el DOM real */}
            { books.length > 0 && books.map((item, index) => (
                <BookItem key={index} book={item} />
            ))}
            { books.length === 0 && <div>No has cargados libros aún o ningún libro cumple con el filtro.</div> }
        </>
    )
}

export default function BookList ({ books, loading }) {
    // TODO: Mostrar loading, etc ...
    // TODO: Armar filtro de fecha
    const [ booksFiltered, setBooksFiltered ] = useState(books);

    // Renderizado condicional version funcion
    const showBooks = () => {
        if (books.length > 0) {
            return books.map((item, index) => (
                <BookItem key={index} book={item} />
            ));
        } else {
            return <div>No has cargados libros aún.</div>
        }
    };

    
    const onYearChangeHandler = (year) => {
        // const booksFilter = books.filter(book => new Date(book.dateRead).getFullYear() === year);
        const booksFilter = books.filter(function (book) {
            console.log(new Date(book.dateRead).getFullYear(), year);
            return new Date(book.dateRead).getFullYear() === year;
        });
        setBooksFiltered(booksFilter);
    }

    // TODO: Expandir o colapsar filtro / formulario
    // TODO: Mostrar idioma según código
    return (
        <div>
            <h2>Libros leídos</h2>
            <BooksFilter onYearChange={onYearChangeHandler} />
            <div className='books-wrapper'>
                { loading && <div>Cargando libros ...</div> }
                { !loading && <Books books={booksFiltered} /> }
            </div>
        </div>
    )
}