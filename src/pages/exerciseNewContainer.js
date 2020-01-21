import React, { useState } from 'react'
import InternalServerError from './500'
import ExerciseNew from './exerciseNew'

const ExerciseNewContainer = (props) => {
    const [ form, formState ] = useState({});
    const [ loading, loadingState ] = useState(false);
    const [ error, errorState ] = useState(null);

    const handleChange = (e) => {
        formState({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        loadingState(true);

        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(form)
            }
            let response = await fetch('http://localhost:8000/api/exercises', config);
            //let json = await response.json();

            loadingState(false);
            
            //Gracias a React Router
            props.history.push('/exercise');

        } catch (error) {
            loadingState(false);
            errorState(error);
        }
    }

    if(error)
        return <InternalServerError error={error.toString()}/>
    return <ExerciseNew onChange={handleChange} 
                        onSubmit={handleSubmit}
                        form={form}/>;
}

export default ExerciseNewContainer
