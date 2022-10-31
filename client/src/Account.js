import {useContext} from 'react'
import { UserContext } from './App'


function Account(){

    const user = useContext(UserContext)

    return(
        <h1> Hello, {user.name} </h1>
    )
}

export default Account