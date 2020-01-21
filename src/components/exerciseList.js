import React from 'react'
import Card from './card'

const ExerciseList = ({data}) => (
    <React.Fragment>
        { 
            data.map( (exercise) => (
                    <div key={exercise.id.toString()}>
                        <Card 
                            title = {exercise.title}
                            description = {exercise.description}
                            img = {exercise.img}
                            leftColor = {exercise.leftColor}
                            rightColor = {exercise.rightColor}
                        />
                        <br />
                    </div>
                )
            )
        }
    </React.Fragment>
)

export default ExerciseList