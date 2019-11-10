import React from 'react';
import { useSelector } from 'react-redux';
import Tasks from './Tasks'


function Content() {
    let data = useSelector(state => state.tasks);
    console.log(data)
    return(
        <div className="container">
            <Tasks {...data} />
        </div>
    )
}

export default Content;