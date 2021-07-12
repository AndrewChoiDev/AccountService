import React from "react";

import type {ShowStatus} from "../App";

type FormProps = {
    inputText: string,
    onInputChange: (input: string) => void,
    onButtonClick?: () => void,
    onSelectChange: (input: ShowStatus) => void,
};

const Form = (props: FormProps) => {
    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(e.target.value);
    };
    const submitToDoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("what");
        
        props.onButtonClick?.();
        props.onInputChange("");
    };
    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.onSelectChange(e.target.value as ShowStatus);
    };
    return (
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type="text"/>
            <button onClick={submitToDoHandler} type="submit">
                Add
            </button>
            <div>
                <select onChange={onSelectChange}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;