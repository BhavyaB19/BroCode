import propTypes from 'prop-types';
function UserGreeting(props) {
    if(props.isLoggedIn) {
        return(
            <h2 className="Welcome-msg">Welcome {props.username}</h2>
        ) 
    }
    return <h2 className="Login-prompt">Please log in</h2>
}
UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool.isRequired,
    username: propTypes.string.isRequired,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}


export default UserGreeting;