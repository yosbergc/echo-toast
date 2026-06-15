# A simple lightweight toast component for React/Next.JS (under 2kb)

## Documentation

[Documentation](https://echo-toast.vercel.app/)
[NPM Link](https://www.npmjs.com/package/echo-toast)
## Installation

```js
npm install echo-toast
```

## Features

- Fully customizable
- Easy to use
- Lightweight (below 5kb)

## Usage

Import the css file on your main file of React.

```js
// main.tsx

import { createRoot } from "react-dom/client";
import YourApp from '@/app.tsx'
import 'echo-toast/styles.css'

const container = document.getElementById('root')

createRoot(container!).render(<YourApp />)
```

Import the **<Toaster />** component to your page/component. 

```js
// Home.tsx

import { Toaster } from 'echo-toast'
import { SuperButton } from '@/components/SuperButton.tsx'

export function Home() {
  return (
  <h1>Hello world</h1>
  <SuperButton />
  // We add the Toaster
  <Toaster />
  )
}
```

Then you can use the **echo.notify()** from anywhere in your app so you can render each toast notification.

```js
// SuperButton.tsx

import { echo } from 'echo-toast'

export function Home() {

  function handleClick() {
    echo.notify({
      label: "I've just said hi!",
      title: 'Greetings!'
    })
  }
  return (
  <button onClick={handleClick}>Time to say hi!</button>
  )
}
```
