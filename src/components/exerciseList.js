import React from 'react'
import Card from './card'

const ExerciseList = ({data}) => (
    <React.Fragment>
        { 
            data.map( (exercise) => (
                    <div key={exercise.id.toString()}>
                        <Card 
                            { ...exercise }
                        />
                        <br />
                    </div>
                )
            )
        }
    </React.Fragment>
)

export default ExerciseList