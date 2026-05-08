import { Toast } from "./Toast";
import { subjectStore } from "../hooks/observer";
import { useToaster } from "../hooks/useToaster";
import { AnimatePresence } from "motion/react";
import { notificationPosition } from "../static/static";
import type { IToaster } from "../types";

export function Toaster({
        positionX = 'right',
        positionY = 'bottom'
    }: IToaster) {
    const toasts = useToaster(subjectStore)
    
    return <section style={{
            position: 'fixed',
            display: 'grid',
            gap: 8,
            ...notificationPosition[positionX][positionY]

        }}><AnimatePresence>

            {
                toasts.filter((_, index) => index < 5).map(toast => (
                <Toast 
                    key={toast.id}
                    {...toast}
                />
                ))
            }

    </AnimatePresence>
    </section>
}