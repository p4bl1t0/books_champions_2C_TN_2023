export function formatDate (dateString) {
    return new Date(dateString).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}