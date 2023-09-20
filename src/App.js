
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList/BookList';
import If from './components/If';
const initialBooks = [
    { title: 'El quijote', dateRead: '2022-01-01', lang: 'es' },
    { title: 'El Martin Fierro', dateRead: '2021-03-01', lang: 'es' },
    { title: 'Rayuela', dateRead: '2023-02-01', lang: 'es' },
    { title: 'Lean Startup', dateRead: '2019-08-22', lang: 'en' },
    { title: '', dateRead: '2019-08-22', lang: '' }
];
function App (argumentos) {
  const [ loading, setLoading ] = useState(false);
  const [ books, setBooks ] = useState([]);
  useEffect(() => {

    async function fetchData() {
      // You can await here
      const booksResponse = await fetch('http://localhost:8000/books', {});
      const books = await booksResponse.json();
      console.log(books);
      setBooks(books.map(book => ({ dateRead: `${book.year}-01-01`, ...book  })));
      // ...
    }
    fetchData();
    return () => {};
  }, []);
  
  const onBookSubmitHandler = (book) => {
    console.log(book);
    setBooks((books) => [...books, book]);
  } 
  const [ showAddForm, setShowAddForm ] = useState(false);
  const showButtonHandler = () => {
    setShowAddForm(!showAddForm);
  }
  return (
    <div className="container">
      <h1>
        <span>Books Champion</span>
        <button 
          type="button" 
          className='btn btn-secondary' 
          onClick={showButtonHandler}
        >
          {/* <If condition={showAddForm}>
            <If.True>
              Ocultar formurlario
            </If.True>
            <If.Else>Agregar lectura</If.Else>
          </If> */}
          { showAddForm ?  'Ocultar formurlario' : 'Agregar lectura' }
        </button>
      </h1>
      { showAddForm && <BookForm onFormSubmit={onBookSubmitHandler} /> }
      <BookList books={books} loading={loading} />
    </div>
  );
}

export default App;
