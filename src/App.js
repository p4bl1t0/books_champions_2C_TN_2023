
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList/BookList';
const initialBooks = [
    { title: 'El quijote', dateRead: '2022-01-01' },
    { title: 'El Martin Fierro', dateRead: '2021-01-01' }
];
function App (argumentos) {
  const [ books, setBooks ] = useState(initialBooks);
  const onBookSubmitHandler = (book) => {
    console.log(book);
    setBooks((books) => [...books, book]);
  } 
  return (
    <div className="container">
      <h1>Books Champion</h1>
      <BookForm onFormSubmit={onBookSubmitHandler} />
      <BookList books={books} />
    </div>
  );
}

export default App;
