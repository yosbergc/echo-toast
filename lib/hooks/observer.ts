import type { IToaster } from "../types"
type Listener = (data: IToaster) => void

export class Subject {
    private observers: Listener[] = [];
    private counter: number = 0;

    subscribe(observer: Listener) {
        this.observers.push(observer)

        return () => {
            this.observers = this.observers.filter(arrayObserver => arrayObserver !== observer)
        }
    }

    notify(data: IToaster) {
        this.counter++;
        this.observers.forEach((observer) => observer({...data, id: this.counter}))
    }
}

export const subjectStore = new Subject()