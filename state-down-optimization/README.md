# React State Down Pattern Demo App

This project demonstrates the performance benefits of applying the **"State Down"** pattern in React applications by preventing unnecessary re-renders of heavy components like `ExpensiveTree`.

---

## Technologies Used

- React 18+
- Functional Components
- useState Hook
- Component Composition

---

## Project Description

In this project, we compare two versions of a simple React app:
- One with the state held **locally** inside a `Form` component (optimized).
- Another with the state lifted **up** to the `App` component (non-optimized).

The app includes an `ExpensiveTree` component which simulates a slow render. The goal is to **prevent this component from re-rendering unnecessarily** by using better state placement practices.

---

## React State Down Pattern vs Traditional State Lifting

Traditional state lifting involves moving state *upward* to a common parent component. However, when the state isn't shared and heavy siblings are present, it's often better to **"lift state down"** — keeping state only where it's needed.

---

###  Unoptimized (Traditional)

```jsx
// App(1).js
import { useState } from 'react';
import ExpensiveTree from './ExpensiveTree';

function App() {
  const [color, setColor] = useState('red');

  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello ,I am a Developer !!</p>
      <ExpensiveTree />
    </div>
  );
}
export default App;

### Comparison Table

| Feature                     | App(1).js (Unoptimized) | App.js + Form.jsx (Optimized)|
|-----------------------------|-------------------------|------------------------------|
| State location              | Global (App)            | Local (Form)                 |
|ExpensiveTree re-renders?    | Yes                     | No                           |
| Performance                 | Worse                   | Better                       |
| Code separation / modularity| Less modular            | More Modular                 |

---
## Installation

```bash
git clone https://github.com/pltyns/react-projects.git
cd react-projects/state-down-optimization
npm install
npm run dev
```
## Developed by

- [@pltyns](https://github.com/pltyns)

---
