import React, {useEffect, useState } from 'react'
import {useForm,SubmitHandler,FieldValues, Field} from "react-hook-form"

interface Props{
  handleTransaction:(data:FieldValues)=>void
}

const InputForm = ({handleTransaction}:Props) => {
    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const [formdata,setFormData]=useState<FieldValues>({})
    
    const onFormSubmit=(data:FieldValues)=>{
      setFormData({...data,id:new Date().getTime()})
    }

    useEffect(()=>{
      if(Object.keys(formdata).length!==0)
        handleTransaction(formdata)
        reset()
        
    },[formdata])

  return (
    <form className='w-50' onSubmit={handleSubmit(onFormSubmit)}>
      <div className='mt-2'>
        <label htmlFor="name" className="form-label">Name</label>
        <input {...register("name",{required:true,maxLength:15})} type="text" className="form-control" />
        {errors.name?.type==="required" && <p className='text-danger'>Name Cannot be empty</p>}
        {errors.name?.type==="maxLength" && <p className='text-danger'>Maximum 15 characters only</p>}
      </div>

      <div className='mt-2'>
      <label htmlFor="price" className="form-label">Price</label>
      <input {...register("price",{required:true,min:0,max:100000})} id="price" type="number" className="form-control" />
      {errors.price?.type==="required" && <p className='text-danger'>Price Cannot be Negative</p>}
      {errors.price?.type==="min" && <p className='text-danger'>Price cannot be Negative</p>}
      {errors.price?.type==="max" && <p className='text-danger'>Price cannot be more than 100000</p>}
      </div>

      <div className='mt-2'>
        <label htmlFor="categories" className='form-label'>Categories</label>
        <select {...register("categories")} name="categories" id="categories" className="form-select">
        <option value="Food" selected>Food</option>
        <option value="Houseold">Houseold</option>
        <option value="Leisure">Leisure</option>
        <option value="Others">Others</option>
        </select>
      </div>
      <button className="btn btn-primary mt-3" type='submit'>Submit</button>
    </form>
  )
}

export default InputForm