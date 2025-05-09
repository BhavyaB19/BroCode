// import styles from './Button.module.css';
function Button() {
  const styles = {
    color: "white",
    backgroundColor: "#007BFF",
    borderRadius: "20px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer"
  }
  return (
    <>
        <br />
        <button className="button" style={styles}>
            Click me
        </button>
    </>
  );
}
export default Button;