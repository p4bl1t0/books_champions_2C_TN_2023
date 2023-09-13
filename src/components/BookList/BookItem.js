import { formatDate } from "../../utils/dateUtils";

const formatLang = (lang) => {
    switch (lang) {
        case 'es':
            return 'Español';
            break;
        case 'en':
            return 'Inglés';
        default:
            return 'Desconocido'
            break;
    }
}
const langNames = {
    es: 'Español',
    en: 'Inglés' 
}

export default function BookItem ({ book }) {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{ book.title }</h3>
                <div>Fecha de lectura: { formatDate(book.dateRead) }</div>
                <div>Idioma: { langNames[book.lang] || 'Desconocido' }</div>
            </div>
        </div>

    )
}