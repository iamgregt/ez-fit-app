import { useForm } from "react-hook-form";
import {useState } from 'react'
import FormHeader from "./FormHeader";
import { useNavigate } from "react-router-dom";
import './NewClientForm.css'

function NewClientForm() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [error, setError] = useState(false)

    let navigate = useNavigate()
    
  return (
    <form onSubmit={handleSubmit((data) => {
      setData(JSON.stringify(data))
      console.log(data)
      
      const newUser = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        weight: data.weight, 
        total_workouts: 0,
        age: data.age
      }

      fetch('/clients', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      .then(r => {
      if(r.ok){
        r.json().then(user => {
          navigate('/clients')
          window.location.reload()
          console.log(user)
          
        })
      }else{
        r.json().then(errorData => {
          console.log(errorData)
          setError(errorData.errors[0])
        })
      }
      })
  
    })}>
      {error ? <h4 style={{color:'white'}}>{error}</h4> : null}
      <FormHeader />
      <input {...register("firstName")} placeholder="First name" required />
      <input {...register("lastName")} placeholder="Last name" required />
      <input type='age' {...register("age")} placeholder='Age' required/>
      <input type='email' {...register("email")} placeholder="Email Address" required />
      <input type='number' {...register("weight")} placeholder='Weight (lbs)' required />
      <input type="submit" />
    </form>
    

  );
}

export default NewClientForm