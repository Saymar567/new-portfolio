import { Link } from "react-router-dom"
import "../styles/notfound.css"
const NotFound=()=>{
    return(
        <div className="error">
            <header>
            <h1>Error 404</h1>
            </header>
            <h3>Page not found.</h3>
           <p>Go back to the {<Link to="/projects" className="error">projects</Link>} section.</p>
           <p>For every project you see and share a little carp is saved.</p>
           <img src="/images/carp.png" alt="Carp-e-diem" />
        </div>
    )
    
}
export default NotFound