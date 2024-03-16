export enum Status{
    todo = 'to do',
    in_progress = 'in progress',
    done = 'done',
}


export type Task = {
    id: number,
    title: string,
    status: string,
}