import type { IToast } from "../types"
type Listener = (data: IToast) => void

export class EchoToast {
    private observers: Listener[] = [];
    private counter: number = 0;

    subscribe(observer: Listener) {
        this.observers.push(observer)

        return () => {
            this.observers = this.observers.filter(arrayObserver => arrayObserver !== observer)
        }
    }

    notify(data: IToast) {
        this.counter++;
        this.observers.forEach((observer) => observer({...data, id: this.counter}))
    }
}

export const echoToastStore = new EchoToast()