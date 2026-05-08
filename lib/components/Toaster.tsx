import { Toast } from "./Toast";
import { subjectStore } from "../hooks/observer";
import { useToaster } from "../hooks/useToaster";
import { AnimatePresence } from "motion/react";
export function Toaster() {
    const toasts = useToaster(subjectStore)
    
    return <AnimatePresence>
        {
            toasts.map(toast => (
            <Toast 
                key={toast.id}
                {...toast}
            />
            ))
        }
    </AnimatePresence>
}