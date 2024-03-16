import {makeAutoObservable} from "mobx";
import {Task} from "../types.ts";

class TaskStore{
    tasks: Task[] = localStorage?.tasks ? JSON.parse(localStorage.tasks) : [];
    taskId: number = localStorage?.tasks ? JSON.parse(localStorage.tasks)?.[0]?.id + 1 : 1;

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    addTask(task : Task){
        this.tasks = [task].concat(this.tasks);   // insert a new task in the beginning of other tasks
        this.incrementTaskId();
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    updateTask(new_task: Task, task_id: number){
        this.tasks = this.tasks.map(task => task.id === task_id ? new_task: task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    removeTask(task_id: number){
        this.tasks = this.tasks.filter(task => task.id !== task_id);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    incrementTaskId(){
        this.taskId ++;
    }
}

export default new TaskStore();