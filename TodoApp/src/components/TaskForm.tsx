import {ChangeEvent, FormEvent, useState} from "react";
import {observer} from "mobx-react-lite";
import {Status} from "../types.ts";
import TaskStore from "../stores/TaskStore.ts";


const TaskForm = observer(() => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');


    const handleOnChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleOnChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value);
    }

    const handleOnSubmitTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        TaskStore.addTask({
            id: TaskStore.taskId,
            title: title,
            status: status,
        })
    }

    return (
        <div>
            <h3>
                Create a new task
            </h3>
            <form onSubmit={handleOnSubmitTask} className={'task_creation_form'}>
                <div className={'task_creation_form_element'}>
                    <input type={'text'} placeholder={'title'} onChange={handleOnChangeTitle}/>
                </div>
                <div className={'task_creation_form_element select_container'}>
                    <label>Set status</label>
                    <select onChange={handleOnChangeStatus}>
                        <option value={Status.todo}>{Status.todo}</option>
                        <option value={Status.in_progress}>{Status.in_progress}</option>
                        <option value={Status.done}>{Status.done}</option>
                    </select>
                </div>

                <div className={'task_creation_form_element'}>
                    <input type={'submit'} value={'create the task'}/>
                </div>
            </form>
        </div>
    );
});

export default TaskForm;