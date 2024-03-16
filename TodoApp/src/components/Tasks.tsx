import {observer} from "mobx-react-lite";
import TaskStore from "../stores/TaskStore.ts";
import TaskEdit from "./TaskEdit.tsx";

const Tasks = observer(() => {

    return (
        <div>
            <h3>My tasks</h3>
            <div>
                {TaskStore.tasks.map(task => <TaskEdit task={task} key={task.id}/>)}
            </div>
        </div>

    );
});

export default Tasks;