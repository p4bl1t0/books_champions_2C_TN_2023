// usar object destructuring permite el autompletado por nombre propiedad
const ShowFullName = ({ nameToShow, lastNameToShow, children }) => { // props
    /// const { nameToShow, lastNameToShow } = props; // 
    const fullName = nameToShow + ' ' + lastNameToShow;
    return (
        <span>{ children } { fullName }</span>
    )
}
export default ShowFullName;