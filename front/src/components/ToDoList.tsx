import React from "react";
import ToDo from "./ToDo";

import type {ShowStatus, Task} from "../App"

type ToDoListProps = {
    tasks: Task[],
    deleteHandler: (id: string) => void,
    completeHandler: (id: string) => void,
    showStatus: ShowStatus
};

const ToDoList = (props: ToDoListProps) => {
    return (
        <div>
            <ul>
                {
                    props.tasks.filter((task) => 
                        props.showStatus == "All" ||
                        (props.showStatus == "Completed" && task.completed) ||
                        (props.showStatus == "Uncompleted" && !task.completed)
                    )
                    .map(task => (
                        <ToDo key={task.id} task={task} 
                        completeHandler={props.completeHandler} 
                        deleteHandler={props.deleteHandler}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default ToDoList;