# React Error Boundary Demo App (Vite)

This project demonstrates how to use the **`react-error-boundary`** package to gracefully handle runtime errors in a React application built with Vite. The app simulates a crash when faulty data is rendered, and recovers using a custom fallback UI.

---

## Technologies Used

- React 18+
- Vite
- Functional Components
- useEffect Hook
- react-error-boundary
- Fetch API

---

## Project Description

In this project, we simulate an error in a `UserDetails` component by deliberately removing required data (e.g., `name`) after fetching user data from a fake API. When the error occurs, an `ErrorBoundary` catches it and displays a friendly fallback UI with an option to retry.

---

## How It Works

1. The `UserDetails` component fetches user data from `https://jsonplaceholder.typicode.com/users/1`.
2. If the user clicks the "Veriyi Boz" (Corrupt Data) button, it removes the `name` field before rendering.
3. This triggers a runtime error in `user.name.toUpperCase()`, which is caught by `ErrorBoundary`.
4. `ErrorFallback` displays the error message and a button to reload the app.

---

### Normal Behavior

```jsx
<h2>{user.name.toUpperCase()}</h2>
<p>{user.email}</p>

###  **Faulty Behavior Triggered**

```jsx
if (shouldCrash) {
  delete data.name; // Force a crash
}

### **ErrorBoundary Usage**

```jsx
<ErrorBoundary
  FallbackComponent={ErrorFallback}
  onReset={() => window.location.reload()}
>
  <UserDetails />
</ErrorBoundary>

### Comparison Table

| Component                   |Responsibility                           | 
|-----------------------------|-----------------------------------------|
|App.jsx            | Wraps UserDetails with ErrorBoundary              | 
| UserDetails.jsx   | Fetches and displays user info, simulates a crash | 
| ErrorFallback.jsx | Displays error message and retry button           | 


---

## Installation

```bash
git clone https://github.com/pltyns/react-projects.git
cd react-projects/error-boundary-demo
npm install
npm run dev

```

## Developed by

- [@pltyns](https://github.com/pltyns)

---
