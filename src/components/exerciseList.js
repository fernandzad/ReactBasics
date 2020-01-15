import React from 'react'
import Card from './card'

function ExerciseList(props){
    return (
        <div>
            { 
                props.data.map( (exercise) => {
                    return (
                        <div>
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
                })
            }
        </div>
    );
}

export default ExerciseList