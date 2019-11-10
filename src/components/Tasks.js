import React from 'react';

function Tasks(props){
    return(
        <div className="output">
            <div className="output__box">
                <p>Com Plano:</p>
                <span 
                className="outpu__box--span">
                {
                   console.log(props)
                }
                </span>
            </div>
        </div>
    )
}

export default Tasks;