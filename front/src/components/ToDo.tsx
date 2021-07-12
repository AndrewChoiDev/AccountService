import React from "react";
import type {Task} from "../App"

type ToDoProps = {
    task: Task,
    deleteHandler: (id: string) => void,
    completeHandler: (id: string) => void,

}

const ToDo = (props: ToDoProps) => {

    const onDeleteClick = () => {
        props.deleteHandler(props.task.id);
    };
    const onFinishClick = () => {
        props.completeHandler(props.task.id);
    };
    return (
        <div>
            <li className={`todo-item ${props.task.completed ? "completed" : ""}`}>{props.task.text}</li>
            <button onClick={onFinishClick}>Finish</button>
            <button onClick={onDeleteClick}>Trash</button>
        </div>
    );
};

export default ToDo;