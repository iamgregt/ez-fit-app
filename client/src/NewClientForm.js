import { useForm } from "react-hook-form";
import {useState } from 'react'
import FormHeader from "./FormHeader";
import './NewClientForm.css'

function NewClientForm() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [error, setError] = useState(false)

    
  return (
    <form onSubmit={handleSubmit((data) => {
      setData(JSON.stringify(data))
      console.log(data)
      
      const newUser = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password
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
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <input type='email' {...register("email")} placeholder="Email Address" />
      <input type='password' {...register("password")} placeholder="Password" />
      <input type='number' placeholder='Weight (lbs)' />
      <input type="submit" />
    </form>
    

  );
}

export default NewClientForm