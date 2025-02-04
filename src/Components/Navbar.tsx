import { useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate();

  return (
    <div style={{display:"flex",gap:"3rem",backgroundColor:"#f7f1dc",paddingLeft:"1rem",paddingRight:"1rem",alignItems:"center",borderRadius:"20px"}}>
            <p style={{color:"#4a2f94",fontWeight:'bolder'}} onClick={()=>navigate("/")}>Counter</p>
            <p style={{color:"#4a2f94",fontWeight:'bolder'}} onClick={()=>navigate("/userform")}>User Form</p>
            <p style={{color:"#4a2f94",fontWeight:'bolder'}} onClick={()=>navigate("/editor")}>Editor</p>
        </div>
  )
}

export default Navbar
