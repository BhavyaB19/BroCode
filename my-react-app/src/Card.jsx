import profilePic from './assets/AlanBhaiya.jpg';
function Card() {
    return(
        <>
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Pic" />
            <h2>Bhavya Bisht</h2>
            <p>I am the strongest</p>
        </div>
        
        </>
    )
}
export default Card;