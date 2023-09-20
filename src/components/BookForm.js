import { useEffect, useState } from "react";

/*
 useEffect --> Sincronizarme a servicios externos
 1. Ver Sintaxis y implicancias. 
 2. Ver segundo argumento posibles valores y el return
 3. No necesito un useEffect: estado derivado, funciones sincronicas simples
 4. Caso de uso común: Llamar a una API
*/

export default function BookForm ({ onFormSubmit }) {
    const [ title, setTitle ] = useState('');
    const [ titleError, setTitleError ] = useState('');
    const [ authorName, setName ] = useState('');
    const [ authorLastname, setLastname ] = useState('');
    const [ authorLastnameError, setAuthorLastnameError ] = useState('');
    const [ dateError, setDateError ] = useState('');

    // Estado derivado
    let fullname = 'Defina un nombre'
    if (authorName && authorLastname) {
        fullname = authorName + ' ' + authorLastname;
    }
    const [ date, setDate ] = useState('');
    const [ seconds, setSeconds ] = useState(0);
    const onTitleChangeHandler = (event) => { // event = Evento del DOM
        setTitle(event.target.value);
    };
    const onDateChangeHandler = (event) => { // event = Evento del DOM
        setDate(event.target.value);
    };
    const onAddClickHandler = () => {
        if (titleError === '' && authorLastnameError === '' && authorName !== '' && date !== '') {

            setDateError('');
            console.log('Libro agregado');
            /* let book = { 
                title: title, 
                dateRead: date,
            };
            // addFun((books) => [...books, book]);
            onFormSubmit(book);
            setTitle('');
            setLastname('');
            setName('');
            setDate(''); */
        } else {

            if (date === '') {
                setDateError('La fecha debe estar completa.')
            }
        }
    };
    /* useEffect(() => {
        console.log('BookForm mounted');
        const timerId = setInterval(() => {
            console.log('contador sucediendo');
            setSeconds((seconds) => { 
                return seconds + 1;
            });
        }, 1000);  
        return () => {
            // LIMPIEZA
            console.log('BookForm unmounted');
            clearInterval(timerId);
        }
    }, []); */ // undefined --> cada vez que se renderiza nuevamente, [] --> solo en el montado 
    // y con [ data ] valores en las dependencias cuando cambia la depencia
    const onTitleBlurHandler = (event) => {
        // event.target.value  o title
        if (title === '') {
            setTitleError('El título tiene que estar completo');
        } else if (title.length < 3) {
            setTitleError('El título debe tener más de 3 caracteres.');
        } else {
            // necesario para que si mostré un error y luego completé bien, se borre el error
            setTitleError('');
        }
    };

    const onAuthorLastnameChangeHandler = (event) => {
        setLastname(event.target.value);

        if (event.target.value === '') {
            setAuthorLastnameError('El apellido tiene que estar completo');
        } else if (event.target.value.length < 3) {
            setAuthorLastnameError('El título debe tener más de 3 caracteres.');
        } else if (!(new RegExp('([A-Za-z])+')).test(event.target.value)) {
            setAuthorLastnameError('El autor solo puede contener letras.');

        } else {
            // necesario para que si mostré un error y luego completé bien, se borre el error
            setAuthorLastnameError('');
        }
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
                        onBlur={onTitleBlurHandler}
                    />
                    { titleError !== '' &&
                        <div className="error">{ titleError }</div>
                    }
                </div>
                <div>
                    <label htmlFor="name" className="form-label">Nombre autor</label>
                    <input 
                        id="name" 
                        type="text"
                        className="form-control"
                        value={authorName} 
                        onChange={(event) => setName(event.target.value)}
                    />
                    { authorName === '' && 
                        <div className="error">El campo de estar completo.</div>
                    }
                </div>
                <div>
                    <label htmlFor="lastname" className="form-label">Apellido</label>
                    <input 
                        id="lastname" 
                        type="text"
                        className="form-control"
                        value={authorLastname} 
                        onChange={onAuthorLastnameChangeHandler}
                    />

                    { authorLastnameError !== '' &&
                        <div className="error">{ authorLastnameError }</div>
                    }
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
                    { dateError !== '' && 
                        <div className="error">{dateError}</div>
                    }
                </div>
                <button type="button" onClick={onAddClickHandler} className="btn btn-primary">
                    Agregar libro de { fullname }
                </button>
            </div>
        </form>
    )
}