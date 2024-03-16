import {Status, Task} from "../types.ts";
import {ChangeEvent, useState} from "react";
import TaskStore from "../stores/TaskStore.ts";

type TaskEditPropTypes = {
    task: Task,
}

const TaskEdit = ({task}: TaskEditPropTypes) => {

    const [title, setTitle] = useState(task.title);
    const [status, setStatus] = useState(task.status);

    const handleOnChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleOnChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value);
    }

    const updateTask = () => {
        TaskStore.updateTask(
            {
                id: task.id,
                title: title,
                status: status,
            },
            task.id);
    }

    const deleteTask = () => {
        TaskStore.removeTask(task.id);
    }

    return (
        <div className={'task_edit_form'}>
            <div>
                #{task.id}
            </div>
            <form className={'task_creation_form'}>
                <div className={'task_creation_form_element'}>
                    <input type={'text'} placeholder={'title'} value={title} onChange={handleOnChangeTitle}/>
                </div>
                <div className={'task_creation_form_element select_container'}>
                    <label>Set status</label>
                    <select onChange={handleOnChangeStatus}>
                        <option value={Status.todo} selected={task?.status === Status.todo}>{Status.todo}</option>
                        <option value={Status.in_progress} selected={task?.status === Status.in_progress}>{Status.in_progress}</option>
                        <option value={Status.done} selected={task?.status === Status.done}>{Status.done}</option>
                    </select>
                </div>
            </form>
            <div>
                <button onClick={deleteTask}>delete</button>
                <button onClick={updateTask}>save</button>
            </div>

        </div>
    );
};

export default TaskEdit;