import { subjectStore } from '../lib/hooks/observer'
import { Toaster } from '../lib/components/Toaster'
function App() {
  return (
    <>
      <button onClick={() => {
        subjectStore.notify({
          label: 'Hola mundo',
          title: 'Saludo',
          type: 'succesful'
        })
      }}>
        Enviar subject
      </button>

      <button onClick={() => {
        subjectStore.notify({
          label: 'Hola mundo',
          title: 'Saludo',
          type: 'error'
        })
      }}>
        Enviar subject 2
      </button>

      <button onClick={() => {
        subjectStore.notify({
          label: 'Hola mundo',
          title: 'Saludo',
          type: 'blank'
        })
      }}>
        Enviar subject 3
      </button>

      <Toaster />
    </>
  )
}

export default App
