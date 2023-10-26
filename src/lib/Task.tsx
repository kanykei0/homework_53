import React from "react";

interface TaskItem {
    id: string;
    text: string;
}

const Task: React.FC<TaskItem> = ({text}) => {
    return(
        <div>
            <p>{text}</p>
        </div>
    );
};

export default Task;
