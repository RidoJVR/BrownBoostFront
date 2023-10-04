
import { Link, useNavigate } from "react-router-dom"
import storage from '../Storage/Storage'
import axios from "axios";


export const Nav = () => {

  const go = useNavigate();
  const logout = async () =>{
    storage.remove('authToken');
    storage.remove('authUser');
    await axios.get('/logout',storage.get('authToken'));
    go('/login');
  }

  return (
    <div>
      <nav className=" navbar navbar-expand-lg navbar-white bg-info">

        <div>
          <a className="navbar-brand">BronwBoost</a>
          <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-traget='#nav' aria-controls="navbarSupportedContent" >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {!storage.get('authUser') ? (
          <div className="collapse navbar-collapse" id="nav">

           <ul className="navbar-nav mx-auto mb-2">

            <li className="nav-item px-lg-4">
              </li> 
            
            <li className="nav-item px-lg-5">
              <Link to='/' className="nav-link">Publicaciones</Link>
            </li>

            </ul> 

            <ul className="navbar-nav mx-auto mb-2">

              <li className="nav-item px-lg-5">
                <button className="btn btn-info" onClick={logout}>Logout</button>
              </li>
              
            </ul>

          </div>

        ) : '' }
        
      </nav>
    </div>
  )
}

export default Nav;
