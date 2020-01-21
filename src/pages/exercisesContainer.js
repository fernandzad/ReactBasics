import React, { useState, useEffect } from 'react'
import Loader from '../components/loader'
import InternalServerError from '../pages/500'
import Exercises from '../pages/exercises'

const ExercisesContainer = () => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect( () => {
        const fetchExercises = async () => {
            try {
                let response = await fetch('http://localhost:8000/api/exercises');
                let data = await response.json();
                //This fragment of code only shows that the component Loader works fine
                await new Promise((resolve, reject) => setTimeout(resolve, 1000));

                setLoading(false);
                setData(data);             
            } catch (error) {
                setLoading(false);
                setError(error);                
            }
        }
        fetchExercises();
    }, [])

    if(loading)
        return <Loader />
    if(error)
        return <InternalServerError error={error.toString()}/>
    return <Exercises data={data}/>;
}

export default ExercisesContainer

// class ExercisesContainer extends React.Component{

//     state = {
//         data: [],
//         loading: true,
//         error: null
//     };

//     async componentDidMount(){
//         await this.fetchExercises();
        
//     }

//     fetchExercises = async () => {
//         try {
//             let response = await fetch('http://localhost:8000/api/exercises');
//             let data = await response.json();
//             //This fragment of code only shows that the component Loader works fine
//             await new Promise((resolve, reject) => setTimeout(resolve, 1000));

//             this.setState({
//                 data,
//                 loading: false
//             }); 
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error
//             }); 
            
//         }
        
//     }

//     render(){
//         if(this.state.loading)
//             return <Loader />
//         if(this.state.error)
//             return <InternalServerError error={this.state.error.toString()}/>
//         return <Exercises data={this.state.data}/>;
//     }
// }