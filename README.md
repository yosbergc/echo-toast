# A simple toast component for React/Next.JS under 5kb

## Installation

```js
npm install echo-toast
```

## Features

- Fully customizable
- Easy to use
- Lightweight (below 5kb)

## Usage

Import the **<Toaster />** component to your page/component. Then you can use the **echo.notify()** from anywhere in your app so you can render each toast notification.

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

```js
// SuperButton.tsx
import { echo } from 'echo-toast'

export function Home() {

  function handleClick() {
    echo.notify({
      label: 'I've just said hi!'
      title: 'Greetings!'
    })
  }
  return (
  <button onClick={handleClick}>Time to say hi!</button>
  )
}
```
