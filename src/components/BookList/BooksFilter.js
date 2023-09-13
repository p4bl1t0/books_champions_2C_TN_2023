import { useState } from "react"

export default function BooksFilter ({ onYearChange }) {
    const [ yearSelected, setYearSelected ] = useState('');
    const yearChangeHandler = (event) => {
        setYearSelected(event.target.value);
        onYearChange(Number(event.target.value));
    }
    return (
        <div>
            <label htmlFor="year">Año de lectura</label>
            <select id="year" value={yearSelected} onChange={yearChangeHandler} >
                <option value={''}></option>
                <option value={2023}>2023</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
            </select>
            <p>Seleccione un año para arrancar a filtrar</p>
        </div>
    )
}