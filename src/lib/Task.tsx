import React from "react";

interface TaskItem {
    id: string;
    text: string;
    onClickDelete: React.MouseEventHandler;
}

const Task: React.FC<TaskItem> = ({text, onClickDelete}) => {
    return(
        <div>
            <p>{text}</p>
            <button onClick={onClickDelete}>delete</button>
        </div>
    );
};

export default Task;
