import BookItem from "./BookItem";
import BooksFilter from "./BooksFilter";

export default function BookList ({ books }) {
    return (
        <div>
            <h2>Libros leídos</h2>
            <BooksFilter />
            { books.map((item, index) => (
                <BookItem key={index} book={item} />
            ))}
        </div>
    )
}