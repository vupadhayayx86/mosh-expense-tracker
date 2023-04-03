import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import ListItems from "./components/ListItems";
import { Field, FieldValues } from "react-hook-form/dist/types";

function App(){
    const [expenses,setExpenses]=useState<FieldValues>({
      transactions:[
        {id:1,name:"Car Wash",price:200,categories:"Leisure"},
        {id:2,name:"Lunch",price:20,categories:"Food"},
        {id:3,name:"Choclates",price:50,categories:"Food"},
        {id:4,name:"Milk",price:300,categories:"Food"},
        
      ]
    })
    
    const handleTransaction=(data:FieldValues)=>{
      //console.log(data)
       setExpenses({...expenses,transactions:[...expenses.transactions,data]})
    }

    const handleDelete=(id:number)=>{
      const deleteItems=expenses.transactions.filter((item:FieldValues)=>item.id!==id)
      setExpenses({...expenses,transactions:deleteItems})
      console.log(expenses)
      
    }

    // const handleFilter=(categories:string)=>{
    //  const allItems=expenses.transactions
    //  if(categories!=="All Items"){
    //  const filteredItems=allItems.filter((item:FieldValues)=>item.categories==categories)
    //  setExpenses({...expenses,transactions:filteredItems})
    //  } 
     
    // }
    

  return(
    <div className="container">
      <InputForm handleTransaction={handleTransaction}/>
      <ListItems expenses={expenses} handleDelete={handleDelete} />
    </div>
  )
}

export default App;