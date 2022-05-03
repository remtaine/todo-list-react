import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Overview = (props) => {
    const {tasks} = props;

    return (
        <ul>
            {tasks.map((task) => {
                return (
                    <li key={task.id}>{task.order}. {task.text} </li> //<button><DeleteIcon onClick={} /></button></li>
                );
            })}
        </ul>
    );
}


export default Overview;