function Student(props){
    return(
        <div className="student-card">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,
// }
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
}

export default Student