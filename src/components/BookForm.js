import { useState } from "react"

export default function BookForm ({ onFormSubmit }) {
    const [ title, setTitle ] = useState('');
    const [ date, setDate ] = useState('');
    const onTitleChangeHandler = (event) => { // event = Evento del DOM
        setTitle(event.target.value);
    };
    const onDateChangeHandler = (event) => { // event = Evento del DOM
        setDate(event.target.value);
    };
    const onAddClickHandler = () => {
        let book = { 
            title: title, 
            dateRead: date,
        };
        // addFun((books) => [...books, book]);
        onFormSubmit(book);
        setTitle('');
        setDate('');
    }
    return (
        <form>
            <div>
                <h2>Añadir formulario</h2>
                <div>
                    <label htmlFor="title" className="form-label">Título</label>
                    <input 
                        id="title" 
                        type="text"
                        className="form-control"
                        value={title} 
                        onChange={onTitleChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="dateRead" className="form-label">Fecha</label>
                    <input 
                        id="dateRead" 
                        type="date"
                        className="form-control"
                        value={date} 
                        onChange={onDateChangeHandler}
                    />
                </div>
                <button type="button" onClick={onAddClickHandler} className="btn btn-primary">
                    Agregar
                </button>
            </div>
        </form>
    )
}