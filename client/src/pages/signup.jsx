import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup(){
  const [name, setName] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post (import.meta.env.VITE_ENDPOINT+'user', {name, email, password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))
  }
    return(
        <div className="d-flex vh-100 align-items-center justify-content-center bg-secondary" >
            <div className='p-3 rounded w-25 bg-success'>

                <h2 className='text-align-center'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>                  
                        <label name="name"
                            className="form-label">Name
                        </label>  
                        <input 
                          type="text"     
                          className="form-control rounded"
                          placeholder="Enter Name"
                          onChange={(e) => setName(e.target.value)}
                        />             
                    </div>
                    <div className='mb-3'>                  
                        <label name="email"
                            placeholder="Enter Email"
                            className="form-label">Email
                        </label>  
                        <input type="email" 
                           placeholder="Enter Email"
                            className="form-control rounded"
                            onChange={(e) => setEmail(e.target.value)}
                        />          
                    </div>
                    <div className='mb-3'>                  
                    <label name="inputPassword"     
                        className="form-label">Password
                    </label>
                    <input type="password"
                      placeholder="Enter Password"
                        name='password'
                        autoComplete='on' 
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-info" type="submit">Register</button>
                    </div>  
                  </form>
                    <div className="d-grid gap-2 col-6 mx-auto">    
                      <p className='m-1'>Already have an account?</p>
                      <Link to="/login" className="btn btn-light" type="submit">Login</Link>
                    </div>              
            </div>
        </div>
    )
}
export default Signup


