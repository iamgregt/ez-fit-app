import { useEffect, useState } from 'react'

function Trainer(){

const [trainers, setTrainers] = useState("")


    useEffect(() => {
        fetch('/trainers')
    .then(r => r.json())
    .then(data => setTrainers(data))
    }, [])


    return(
        <div>
            <ul>
                {trainers ? trainers.map((t) => {
                    return(
                        <li key={t.id}>
                            {t.name}
                        </li>
                    )
                }) : null}
            </ul>
        </div>
    )

}

export default Trainer