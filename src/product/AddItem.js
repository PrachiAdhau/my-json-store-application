import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

function AddItem() {

   const {register,handleSubmit,setValue,reset}   =useForm();
   const {id}= useParams()
   const saveData=product=>{
   if(!id)
   {
    axios.post('http://localhost:4000/product',product)
   .then(res=>{
    if(res.status===201)
    {
      alert("Product details saved...!")
      reset();
    }
   })
   .catch(error=>console.log(error))
  }else
  {
    axios.put(`http://localhost:4000/product/${id}`,product)
         .then(res=>{
      if(res.status===200)
      {
        alert("product is going to update")
      }
    })
    .catch(error=>console.log(error))
  }
  }
   const getEditData=()=>
   {if(id)
   {
     axios.get(`http://localhost:4000/product/${id}`)
           .then(res=>{
             for(let prop in res.data)
            {
              
              setValue(prop,res.data[prop])
            }
             })
            }

  }
   useEffect(()=>getEditData,[]);
  return (
    <div className='d-flex justify-content-center'>
    <div className='bg-white w-50 mt-3 p-3'>
      <h1 className='text-center fs-3 text-primary'>Add Product details..</h1>

      <form onSubmit={handleSubmit(saveData)}>
        <div>
          <h1>{id}</h1>
        <label className='form-label'>Enter product ID</label>
        <input type='text' {...register('id')} disabled={id} className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter product Name</label>
        <input type='text'  {...register('productName')}  className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter product manufacturer</label>
        <input type='text'  {...register('manufacturer')} className='form-control border border-dark'></input>
        </div>
        <div>
        <label className='form-label'>Enter product specification</label>
        <input type='text'  {...register('specification')} className='form-control border border-dark'></input>
        </div>
        <div>
          <label className='form-label'>Enetr product Quantity</label>
          <input type='number' {...register('quantity')}  className='form-control border border-dark'></input>
        </div>
       
        <div>
          <label className='form-label'>Enetr product price</label>
          <input type='number' {...register('price')}  className='form-control border border-dark'></input>
        </div>
        <div  className='mt-3'>
          <label className='form-label me-4'>Is that product in stock</label>
          <input type='checkbox'  {...register('Instock')} className='form-check-input  border border-dark'></input>
        </div>
        <button className='btn btn-success mt-4'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default AddItem;