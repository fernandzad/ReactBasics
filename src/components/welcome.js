import React from 'react'
import '../components/styles/welcome.css'

const Welcome = ({title, description}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
)

export default Welcome;