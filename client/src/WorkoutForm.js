import { useForm } from "react-hook-form";
import {useState } from 'react'
import FormHeader from "./FormHeader";
import './WorkoutForm.css'

function WorkoutForm() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    
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
        })
      }
      })
  
    })}>
      <FormHeader />
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <input type='email' {...register("email")} placeholder="Email Address" />
      <input type='password' {...register("password")} placeholder="Password" />
      {/* <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" /> */}
      <input type="submit" />
    </form>
  );
}

export default WorkoutForm