interface TaskForm {
    field: string;
    onTextAdd: React.ChangeEventHandler<HTMLInputElement>;
    onClickAdd: React.MouseEventHandler;
} 

const AddTaskForm: React.FC<TaskForm> = ({field, onTextAdd, onClickAdd}) => {
    return(
        <form id="form">
            <input type="text" placeholder="something" onChange={onTextAdd} value={field}/>
            <button onClick={onClickAdd}>Add task</button>
        </form>
    );
};

export default AddTaskForm;