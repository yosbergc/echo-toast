import { useState, useEffect } from "react";
import type { EchoToast } from "./observer";
import type { IToast } from "../types";
export function useToaster(echoToast: EchoToast) {
    const [toasts, setToasts] = useState<IToast[]>([])
    useEffect(() => {
        let arrayTimeout: ReturnType <typeof setTimeout>[] = [];
        const unsubscribe = echoToast.subscribe((data) => {
            function deleteToast() {
                setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== data.id))
                clearTimeout(timeout)
                arrayTimeout = arrayTimeout.filter(t => t !== timeout);
            }

            setToasts((prevState) => [...prevState, {...data, deleteToast}])

            const timeout = setTimeout(() => {
                deleteToast()
            }, 5000)

            arrayTimeout.push(timeout)
        })

        return () => {
            unsubscribe()
            arrayTimeout.forEach(timeout => {
                if (timeout) {
                    clearTimeout(timeout)
                }
            })
        }
    }, [echoToast])


    return toasts;
}