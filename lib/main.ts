import { echoToastStore } from "./hooks/observer";

const echo = {
    notify: echoToastStore.notify.bind(echoToastStore)
}

export { echo }
export { Toaster } from "./components/Toaster";