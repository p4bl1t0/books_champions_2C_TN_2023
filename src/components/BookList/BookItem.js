import { formatDate } from "../../utils/dateUtils";

export default function BookItem ({ book }) {
    return (
        <div className="card">
            <div className="card-body">
            <h3 className="card-title">{ book.title }</h3>
            <div>Fecha de lectura: { formatDate(book.dateRead) }</div>
            </div>
        </div>

    )
}