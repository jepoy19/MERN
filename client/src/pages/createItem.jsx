import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateItem(){

    const [item, setItem] = useState()
    const [stocks, setStocks] = useState()
    const [price, setPrice] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const Submit = (e) => {
        e.preventDefault();
        axios.post(import.meta.env.VITE_ENDPOINT+'create',{item, stocks, price})
        .then(result => {
            console.log(result)
            navigate('/item')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 align-items-center justify-content-center bg-secondary">
            <div className='container-fluid w-50 bg-info p-3 rounded'>
                <form onSubmit={Submit}>
                    <h2>Add Item</h2>
                    <div className="mb-3 fs-3">
                        <label htmlFor="" className="form-label">Item</label>
                        <input type="text" className="form-control" id="formGroupExampleInput"
                        onChange={(e) => setItem(e.target.value)} />
                    </div>
                    <div className="mb-3 fs-3">
                        <label htmlFor="" className="form-label">Available Stocks</label>
                        <input type="number" className="form-control" id="formGroupExampleInput2"
                        onChange={(e) => setStocks(e.target.value)} />
                    </div>
                    <div className="mb-3 fs-3">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="number" className="form-control" id="formGroupExampleInput"
                        onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreateItem;