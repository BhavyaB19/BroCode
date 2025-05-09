import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
// import UserGreeting from './UserGreeting.jsx'

function App() {  
  return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Button></Button>
    <Student name="Spongebob" age={19} isStudent={true}></Student>
    <Student name="Patrick" age={20} isStudent={false}></Student>
    <Student name="Squidward" age={21} isStudent={false}></Student>
    <Student name="Sandy" age={22} isStudent={true}></Student>
    <Student name="Hero"></Student>
    {/* <UserGreeting isLoggedIn={true} username="1"></UserGreeting> */}
    </>
  )

}

export default App
