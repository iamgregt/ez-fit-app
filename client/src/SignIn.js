import React from "react"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import './SignIn.css'


function SignIn({onLogin}) {

    const [authMode, setAuthMode] = useState("signin")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    const navigate = useNavigate()



    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    function clearState(){
      setEmail('')
      setPassword('')
      navigate('/')
      changeAuthMode()
    }

    function onSignUp(e) {
      e.preventDefault()

      

      
      const user = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        workouts_sold: 0
      }

      fetch('/trainers', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json()).then(data => {
        console.log(data)
        clearState()
        setErrors(["Welcome! Please sign in"])
      })
    }

    function onSubmit(e) {
      e.preventDefault()

      const user = {
        email,
        password
      }

      fetch('/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(res => {
          if(res.ok){
            res.json().then(user => {
              navigate('/')
              console.log(user)
              onLogin(user)
            })
          }else{
            res.json().then(errorData => {
              setErrors(errorData.error)
              setEmail('')
              setPassword('')
            })
          }
        } )
    
    }



      if (authMode === "signin") {
        return (
          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={onSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                  <span className="nry">Not registered yet?{" "}</span>
                  <span className="link-primary" onClick={changeAuthMode}>
                    <a href="#">Sign Up</a>
                  </span>
                  {errors[0] && 
                  <div className="error-message">
                  <h4 className="error-text">{errors}</h4>
                </div>
                }
                </div>
                <div className="form-group mt-3">
                  <label>Email</label>
                  <input
                  required
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}                
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                  required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="text-center mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </form>
          </div>
        )
      }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={onSignUp}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
                  Already a User?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    <a href="#">Sign In</a>
                  </span>
                </div>
              <div className="form-group mt-3">
                <label>First Name</label>
                <input 
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName}
                  required
                  type='text'
                  className="form-control mt-1"
                  placeholder='First Name'
                 />
                 <label>Last Name</label>
                 <input 
                  onChange={e => setLastName(e.target.value)}
                  value={lastName}
                  required
                  type='text'
                  className="form-control mt-1"
                  placeholder='Last Name'
                 />
              </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
              type="text"
              className="form-control mt-1"
              placeholder="email"
            />
               <label>Password</label>
            <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
              type="password"
              className="form-control mt-1"
              placeholder="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn 