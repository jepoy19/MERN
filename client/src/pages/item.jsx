import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Item(){

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_ENDPOINT+'item')
        .then(result => setItems(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete(import.meta.env.VITE_ENDPOINT+'item/'+id)     
        .then(res => {console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }

    const logOut = () => {
      alert("Are you sure you want to log out?")
      window.location.href = './login';
    }
  return(
    <div className='d-flex vh-100 align-items-center justify-content-center bg-secondary'>
      <div className='container-fluid bg-white p-3 rounded'>
      <button className='btn btn-danger btn-lg  m-3 position-absolute top-0 end-0 ' onClick={logOut}>Log Out</button>
      <Link to="/create" className='btn btn-primary m-3 btn-lg mx-auto'>Add Item</Link>
  
        <table className="table  table-info table-striped-columns mx-auto text-center fs-4">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Available Stocks</th>
              <th scope="col">Price</th>
              <th scope="col">Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                items.map((item) => {
                    return(
                    <>
                    <tr>
                        <td>{item.item}</td>
                        <td>{item.stocks}</td>
                        <td>{item.price}</td>
                        <td>{item.price * item.stocks}</td>
                        <td>
                        <Link to={`/update/${item._id}`} className='btn btn-success btn-lg gap-3'>Edit</Link>
                            
                            <button className='btn btn-danger btn-lg' style={{marginLeft:"5px"}} 
                            onClick={() => handleDelete(item._id)}>Delete</button>
                        </td>
                    </tr>
                    </>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Item;