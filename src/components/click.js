import React, { useState } from 'react'

const Click = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="container">
            <div className="form-check">
                <label className="form-check-label" 
                        htmlFor="exampleCheck1"
                    >You clicked me {counter} times! </label>
            </div>
            <button type="submit" 
                    className="btn btn-primary"
                    onClick={() => setCounter(counter + 1)}
                >Click me!</button>
        </div>
    );
}

export default Click;