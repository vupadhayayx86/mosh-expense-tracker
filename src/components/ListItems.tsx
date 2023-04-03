import React, { FormEvent, useState,useEffect } from 'react'
import { FieldValues } from 'react-hook-form'

const ListItems = ({expenses,handleDelete}:FieldValues) => {
  const [categoryFiltered,setCategoryFiltered]=useState<FieldValues>([...expenses.transactions]);
  const handleCategoryFilter=(categories:string)=>{
    if(categories!=="All Items"){
      const filteredItems=expenses.transactions.filter((item:FieldValues)=>item.categories==categories)
      setCategoryFiltered(filteredItems)
      } else {
        setCategoryFiltered(expenses.transactions)
      }
     
  }

  useEffect(()=>{
    setCategoryFiltered(expenses.transactions)
  },[handleDelete])

  return (
    <div className='w-50 mt-4'>
      <h2>Expenses</h2>
      <select name='categoryfilter' id='categoryfilter' className='form-select my-4' onChange={(e)=>handleCategoryFilter(e.target.value)}>
        <option selected value="All Items">All Items</option>
        <option value="Food">Food</option>
        <option value="Leisure">Leisure</option>
        <option value="Others">Others</option>
        <option value="Houseold">Houseold</option>
      </select>

      <table className="table">
      <thead>
        <tr>
          <th scope='col'>Time</th>
          <th scope='col'>Name</th>
          <th scope='col'>Price</th>
          <th scope='col'>Category</th>
          <th scope='col'>Modify</th>
        </tr>
      </thead>
      <tbody >
      {console.log(categoryFiltered)}
      {categoryFiltered.map((item:FieldValues)=>(
        
          <tr key={item.id}>
            <td>{new Date(item.id).toLocaleString()}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.categories}</td>
            <td><button onClick={()=>handleDelete(item.id)} className="btn btn-danger">Delete</button></td>
          </tr>
        
      ))}
      </tbody>
      </table>
    </div>
  )
}

export default ListItems