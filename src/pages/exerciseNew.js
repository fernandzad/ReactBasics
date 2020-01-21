import React from 'react'
import ExerciseForm from '../components/exerciseForm'
import Card from '../components/card'
import Title from '../components/title'

const ExerciseNew = ({form, onSubmit, onChange}) => {
    return (
        <React.Fragment>
            <Title title="Nuevo Ejercicio" 
                    description="Ingresa los valores para agregar un nuevo ejercicio"/>
            <div className="ExerciseNew_Lateral_Spaces row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card 
                        {...form}
                    />
                </div>
                <div className="col-sm ExerciseNew_Card_Space">
                    <ExerciseForm 
                        onChange={onChange}
                        onSubmit={onSubmit}
                        form={form}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ExerciseNew;