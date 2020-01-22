import React from 'react'
import Loader from '../components/loader'
import InternalServerError from '../pages/500'
import Exercises from '../pages/exercises'
import useFetch from '../hooks/useFetch'
import url from '../config'

const ExercisesContainer = () => {
    let { data, loading, error } = useFetch(`${url}/exercises`);

    if(loading)
        return <Loader />
    if(error)
        return <InternalServerError error={error.toString()}/>
    return <Exercises data={data}/>;
}

export default ExercisesContainer