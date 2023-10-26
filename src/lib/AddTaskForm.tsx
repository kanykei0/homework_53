import React from "react";

interface TaskForm {
    field: string;
    onTextAdd: React.ChangeEventHandler<HTMLInputElement>;
} 

const AddTaskForm: React.FC<TaskForm> = ({field, onTextAdd}) => {
    return(
        <form id="form">
            <input type="text" placeholder="something" value={field} onChange={onTextAdd}/>
        </form>
    );
};

export default AddTaskForm;