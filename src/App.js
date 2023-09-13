
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList/BookList';
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
  // Aclaración: hacemos un fake de carga, como si estuvieramos buscando datos a una API
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBooks(initialBooks);
      setLoading(false);
    }, 3000);
  }, []);
  const onBookSubmitHandler = (book) => {
    console.log(book);
    setBooks((books) => [...books, book]);
  } 
  const [ showAddForm, setShowAddForm ] = useState(false);
  const showButtonHandler = () => {
    setShowAddForm(!showAddForm);
  }

  const vinos = [
    { name: 'Malbec' },
    { name: 'Merlot' }
  ] ;
  console.log(vinos);
  return (
    <div className="container">
      <h1>
        <span>Books Champion</span>
        <button 
          type="button" 
          className='btn btn-secondary' 
          onClick={showButtonHandler}
        >
          { showAddForm ? 'Ocultar formurlario' : 'Agregar lectura' } 
        </button>
      </h1>
      { showAddForm && <BookForm onFormSubmit={onBookSubmitHandler} /> }
      <BookList books={books} loading={loading} />
    </div>
  );
}

export default App;
