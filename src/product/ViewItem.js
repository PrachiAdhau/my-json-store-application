import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewItem() {
    const [product,setProduct]=useState([]);

    const getData=()=>{
axios.get('http://localhost:4000/product')
     .then((res)=>setProduct(res.data)
        )// .catch((error)=>console.log(error))   
    }
    useEffect(getData,[])

    function deleteProduct(id)
    {
       axios.delete(`http://localhost:4000/product/${id}`)
       .then(res=>{
        if(res.status===200)
        {
           alert("product details removed..!") 
           window.location.reload();
        }
       })
       .catch(error=>console.log(error))
    }

  return (
    <div>
        <table className='table tabel-hover'>
            <thead>
                <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Specification</th>
                <th>Manifacturer</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>In Stock</th>
                <th>Action</th>
                <th>Edit</th>
                <th>Image</th>
                </tr>
               
            </thead>
            <tbody>
                {
                    product.map((product)=><tr>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{product.specification}</td>
                        <td>{product.manufacturer}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td><input type='checkbox' checked={product.Instock}></input></td>
                        <td><button className='btn btn-outline-danger' onClick={()=>deleteProduct(product.id)}>
                            <i className="bi bi-trash3-fill"></i></button></td>
                        <td>
                            <Link className='btn btn-outline-primary' to={`/edit/${product.id}`} >
                            <i className="bi bi-pencil-square"></i></Link></td>
                       <td><img src={product.Image} height="50px"/></td>
                    </tr>)
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default ViewItem;