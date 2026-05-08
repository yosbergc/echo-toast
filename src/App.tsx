import { subjectStore } from '../lib/hooks/observer'
import { Toaster } from '../lib/components/Toaster'
function App() {
  return (
    <>
      <button onClick={() => {
        subjectStore.notify({
          label: 'Hola mundo'
        })
      }}>
        Enviar subject
      </button>

      <Toaster />
    </>
  )
}

export default App
