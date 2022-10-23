import { useForm } from "react-hook-form";
import {useState } from 'react'
import FormHeader from "./FormHeader";
import './WorkoutForm.css'

function WorkoutForm() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <FormHeader />
      <input {...register("firstName")} placeholder="First name" />
      <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
}

export default WorkoutForm