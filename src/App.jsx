import './App.css'
import Profile from './profile/profile'
function App() {
  let info={
    fullName :"Fakhfakh fedi ",
    bio:"I'm a high school student in nabeul.",
    profession:"still a student"
  }
  const handleName=name=>alert(name)
  return (
    <div className="App">
      <Profile handleName={handleName(info.fullName)} fullName={info.fullName} bio={info.bio} profession={info.profession} >{<img src='../public/tom cruise.jpg' alt={info.fullName} />}</Profile>
    </div>
  )
}

export default App
