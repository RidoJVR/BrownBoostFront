
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {sendRequest}  from '../components/Auth/Functions'
import DivInput from '../components/DivInput'
import storage from '../Storage/Storage'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const go = useNavigate();
    

    const login = async(e) => {
      e.preventDefault();
      const form = {email:email, password:password};
      const res = await sendRequest('POST', form, '/api/login', '', false);

      if(resizeTo.status == true){
        storage.set('authToken',res.token);
        storage.set('authUser',res.data);
        go('/')
      }

    }

    return (
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-md-4 offset-md-4'> 
        <div className='card border border-primary'>
          <div className='card-header bg-primary border border-primary text-white'>
            LOGIN
          </div>
          <div className='card-body'>
            <form onSubmit={login}>
              <DivInput type='email' icon='fa-at' value={email} className='form-control' placeholder='Email' requied='required' handleChange={(e)=> setEmail(e.target.value)} />
              <DivInput type='password' icon='fa-key' value={password} className='form-control' placeholder='Password' requied='required' handleChange={(e)=> setPassword(e.target.value)} />
              <div className='d-grid col-10 mx-auto'>
                <button className='btn btn-dark'>
                  <i className='fa-solid fa-door-open'></i>Login
                </button>
              </div>
            </form>
            <Link to='/registro'></Link>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Login;