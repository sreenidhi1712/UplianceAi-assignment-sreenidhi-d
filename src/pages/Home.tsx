import Counter from "../Components/Counter"
import Navbar from "../Components/Navbar"
import RichTextEditor from "../Components/RichTextEditor"
import UserForm from "../Components/UserForm"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

function Home() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center",width:"100%"}}>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Counter/>}/>
        <Route path="/userform" element={<UserForm/>}/>
         <Route path="/editor" element={<RichTextEditor/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Home
