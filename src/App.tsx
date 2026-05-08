import { Toaster, echo } from '../lib/main'
function App() {
  return (
    <>
      <button onClick={() => {
        echo.notify({
          label: 'Hola mundo',
          title: 'Saludo',
          type: 'succesful'
        })
      }}>
        Enviar subject
      </button>

      <button onClick={() => {
        echo.notify({
          label: 'Hola mundo',
          title: 'Saludo',
          type: 'error'
        })
      }}>
        Enviar subject 2
      </button>

      <button onClick={() => {
        echo.notify({
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
