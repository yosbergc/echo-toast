import { createRoot } from "react-dom/client";
const container = document.getElementById('root')

import { echo, Toaster } from '../lib/main'
createRoot(container!).render(<>
    <button onClick={() => echo.notify({ title: "Testing Title", label: 'Hello from Toaster', type: 'succesful' })}>Render Toaster</button>
    <Toaster />
</>)