import { useState, useEffect } from "react";
import type { Subject } from "./observer";
import type { IToaster } from "../types";

export function useToaster(subject: Subject) {
    const [toasts, setToasts] = useState<IToaster[]>([])

    useEffect(() => {
        const unsubscribe = subject.subscribe((data) => {
            const toastsCopy = [...toasts]
            toastsCopy.push(data)

            setToasts(toastsCopy)

            return () => unsubscribe()
        })
    })

    return toasts;
}