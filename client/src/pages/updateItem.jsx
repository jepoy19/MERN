import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function UpdateItem(){
  const {id} = useParams()
  const [item, setItem] = useState()
  const [stocks, setStocks] = useState()
  const [price, setPrice] = useState()
  axios.defaults.withCredentials = true;
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(import.meta.env.VITE_ENDPOINT+'item/'+id)
    .then(result => {
      console.log(result)
      setItem(result.data.item)
      setStocks(result.data.stocks)
      setPrice(result.data.price)
    })
    .catch(err => console.log(err))
},[id])

  const Update = (e) => {
    e.preventDefault();
    axios.put(import.meta.env.VITE_ENDPOINT+'item/'+id,{item, stocks, price})
        .then(result => {
            console.log(result)
            navigate('/item')
        })
        .catch(err => console.log(err))
  } 

    return(
    <div className="d-flex vh-100 align-items-center justify-content-center bg-secondary">
        <div className='container-fluid w-50 bg-info p-3 rounded'>
            <form onSubmit={Update}>
                <h2>Update Item</h2>
                <div className="mb-3 fs-3">
                    <label htmlFor="" className="form-label">Item</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" value={item} 
                    onChange={(e) => setItem(e.target.value)}/>
                </div>
                <div className="mb-3 fs-3">
                    <label htmlFor="" className="form-label">Available Stocks</label>
                    <input type="number" className="form-control" id="formGroupExampleInput2" value={stocks}
                    onChange={(e) => setStocks(e.target.value)}/>
                </div>
                <div className="mb-3 fs-3">
                    <label htmlFor="" className="form-label">Price</label>
                    <input type="number" className="form-control" id="formGroupExampleInput" value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>
        
    </div>
    )
}
export default UpdateItem;