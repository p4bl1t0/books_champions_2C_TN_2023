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

    const [ errors, setErrors ] = useState({});

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

    const validarForm = (fieldName) => {
        let _errors = {};
        if (!fieldName || fieldName === 'title') {
            if (title === '') {
                _errors = { ..._errors, title: 'El título tiene que estar completo.' };
            } else if (title.length < 3) {
                _errors = { ..._errors, title: 'El título tiene que tener mas de 3 caracteres.' }
            } else {
                // necesario para que si mostré un error y luego completé bien, se borre el error
    
                _errors = { ..._errors, title: undefined };
            }
        }
        if (!fieldName || fieldName === 'authorName') {
            if (authorName === '') {
                _errors = { ..._errors, authorName: 'El nombre tiene que estar completo' };
            } else {
                // necesario para que si mostré un error y luego completé bien, se borre el error
                
                _errors = { ..._errors, authorName: undefined };
            }
        }

        setErrors(_errors);
        return _errors;
    }

    const onAddClickHandler = () => {
        let formOk = true;
        let _errors = validarForm();
        Object.keys(_errors).forEach((key) => {
            console.log(key, _errors[key])
            if (_errors[key]) {
                formOk = false;
            }
        });

        if (formOk) {

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
        validarForm('title');
    };

    const onAuthorLastnameChangeHandler = (event) => {
        setLastname(event.target.value);

        if (event.target.value === '') {
            setErrors({ ...errors, authorLastname: 'El apellido tiene que estar completo' });
        } else if (event.target.value.length < 3) {
            setErrors({ ...errors, authorLastname:'El título debe tener más de 3 caracteres.' });
        } else if (!(new RegExp('([A-Za-z])+')).test(event.target.value)) {
            setErrors({ ...errors, authorLastname: 'El autor solo puede contener letras.' });

        } else {
            // necesario para que si mostré un error y luego completé bien, se borre el error
            
            setErrors({ ...errors, authorLastname: undefined });
        }
    }
    const onNameChange = (event) => {
        setName(event.target.value);

        // validarForm('authorName');
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
                    { errors.title &&
                        <div className="error">{ errors.title }</div>
                    }
                </div>
                <div>
                    <label htmlFor="name" className="form-label">Nombre autor</label>
                    <input 
                        id="name" 
                        type="text"
                        className="form-control"
                        value={authorName} 
                        onChange={onNameChange}
                    />
                    { errors.authorName && 
                        <div className="error">{errors.authorName}</div>
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

                    { errors.authorLastname &&
                        <div className="error">{ errors.authorLastname }</div>
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