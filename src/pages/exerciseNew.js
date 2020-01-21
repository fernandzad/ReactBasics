import React from 'react'
import ExerciseForm from '../components/exerciseForm'
import Card from '../components/card'
import Title from '../components/title'

class ExerciseNew extends React.Component{
    
    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
        return (            
            <React.Fragment>
                <Title title="Nuevo Ejercicio" 
                        description="Ingresa los valores para agregar un nuevo ejercicio"/>
                <div className="ExerciseNew_Form_Center ExerciseNew_Lateral_Spaces row">
                    <div className="col-sm ExerciseNew_Card_Space">
                        <Card 
                            {...this.state.form}
                        />
                    </div>
                    <div className="col-sm ExerciseNew_Card_Space">
                        <ExerciseForm 
                            onChange={this.handleChange}
                            form={this.state.form}
                        />
                    </div>
                </div>
            </React.Fragment>
            
                
        );
    }
}

export default ExerciseNew