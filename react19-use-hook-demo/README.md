
# React 19 `use()` Hook Activity App

This project fetches a random activity from the Bored API using the new React 19 `use()` hook. It is built with Next.js 13+ App Router.

---

## Technologies Used

- TypeScript
- Suspense (loading screen)
- Server Components
- Bored API (`https://bored-api.appbrewery.com/random`)

---

## Project Description

In this project, data is asynchronously fetched inside a **Server Component** using the `use()` hook. This results in:
- Cleaner code
- Data fetching wrapped with `Suspense`, automatically showing a loading screen.

---

## React 19 `use()` vs Traditional Data Fetching

The `use()` hook used in this project is a new feature introduced in React 19. Below is a comparison with the old method:

### Old Method: `useEffect` + `useState`

```tsx
'use client'
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch('https://bored-api.appbrewery.com/random')
      .then(res => res.json())
      .then(data => setJoke(data));
  }, []);

  if (!joke) return <p>Loading...</p>;

  return <div>{joke.activity}</div>;
}
```

### New Method: React 19 `use()`

```tsx
import { use } from 'react';
import { getJoke } from '@/lib/api';

export default function HomePage() {
  const joke = use(getJoke());

  return <div>{joke.activity}</div>;
}
```

---

### Comparison Table

| Feature                     | useEffect (Old) | use() (New)          |
|-----------------------------|-----------------|---------------------|
| Runs server-side?           | No              | Yes                 |
| Code complexity             | High            | Low                 |
| Loading screen              | Manual          | Automatic with Suspense |
| SEO friendliness            | Low             | High                |
| Modernity                   | Old             | New and modern       |

---

## Installation

```bash
git clone https://github.com/pltyns/react-projects.git
cd react-projects/react19-use-hook-demo
npm install
npm run dev
```

---

## Notes

- `use()` only works inside Server Components.
- The `HomePage.tsx` component should **NOT** include `"use client"`.
- Loading state is handled automatically by `Suspense`.

---

## Developed by

- [@pltyns](https://github.com/pltyns)

---
