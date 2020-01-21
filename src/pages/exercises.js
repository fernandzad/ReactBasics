import React from 'react'
import ExerciseList from '../components/exerciseList'
import Title from '../components/title'
import Add from '../components/add'

const Exercises = ({data}) => {
    return (
        <React.Fragment>
            <div>
                <Title title="Hello Ad!"
                    description="Let's workout to get some gains!"/>
            </div>
            <div>
                <ExerciseList data={data}/>
            </div>
            <br />
            <div>
                <Add />
            </div>
        </React.Fragment>
    );
}

export default Exercises;