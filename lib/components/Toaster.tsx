import { Toast } from "./Toast";
import { subjectStore } from "../hooks/observer";
import { useToaster } from "../hooks/useToaster";

export function Toaster() {
    const toasts = useToaster(subjectStore)
    return toasts.map(toast => (
        <Toast 
            key={toast.id}
            {...toast}
        />
    ))
}