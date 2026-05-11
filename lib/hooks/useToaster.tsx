import { useState, useEffect } from "react";
import type { EchoToast } from "./observer";
import type { IToast } from "../types";
export function useToaster(echoToast: EchoToast) {
    const [toasts, setToasts] = useState<IToast[]>([])

    useEffect(() => {
        const unsubscribe = echoToast.subscribe((data) => {
            function deleteToast() {
                setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== data.id))
            }

            setToasts((prevState) => [...prevState, {...data, deleteToast}])
        })

        return () => {
            unsubscribe()
        }
    }, [echoToast])


    return toasts;
}