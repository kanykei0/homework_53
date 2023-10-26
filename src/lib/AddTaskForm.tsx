interface TaskForm {
    field: string;
    onTextAdd: React.ChangeEventHandler<HTMLInputElement>;
    onClickAdd: React.MouseEventHandler;
} 

const AddTaskForm: React.FC<TaskForm> = ({ onTextAdd, onClickAdd}) => {
    return(
        <form id="form">
            <input type="text" placeholder="something" onChange={onTextAdd}/>
            <button onClick={onClickAdd}>Add task</button>
        </form>
    );
};

export default AddTaskForm;