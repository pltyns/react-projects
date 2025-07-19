#  React Web Vitals Demo

This project demonstrates how to monitor **Web Vitals** in real-time within a React application using the `web-vitals` library. It visualizes key performance metrics like **TTFB**, **FCP**, **LCP**, **FID**, and **CLS**, and provides descriptive feedback about each.

---

##  Technologies Used

- React 18+
- Functional Components
- Hooks (`useState`, `useEffect`)
- [web-vitals](https://www.npmjs.com/package/web-vitals) library

---

##  Project Description

In this project, we measure and display the **core web performance metrics** provided by the `web-vitals` library. These metrics help developers understand and optimize the perceived loading speed, responsiveness, and layout stability of a web page.

### Displayed Metrics

- **TTFB (Time to First Byte)** – Measures the time it takes for the first byte to arrive from the server.
- **FCP (First Contentful Paint)** – Time until the first piece of content is rendered.
- **LCP (Largest Contentful Paint)** – Time it takes for the largest visible element to load.
- **FID (First Input Delay)** – Measures user interaction latency.
- **CLS (Cumulative Layout Shift)** – Detects unexpected layout shifts during load.

Each metric is shown with:
- A **description** of what it represents
- A **status** badge: ✅ Good / ⚠️ Needs Improvement / ❌ Poor

---

##  Educational Purpose

This demo is useful for:
- Learning **React hooks** and component structure
- Understanding **performance optimization**
- Practicing **real-time monitoring** with third-party libraries

---

##  Sample Output

> Metrics are displayed in styled boxes with values, explanations, and health statuses.  
> Each reloaded visit may show different values based on network/server conditions.

---

##  Installation & Run

```bash
git clone https://github.com/pltyns/react-web-vitals.git
cd react-web-vitals-demo
npm install
npm start
