import React from 'react'
import Card from './card'

const ExerciseList = ({data}) => (
    <div>
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
    </div>
)

export default ExerciseList