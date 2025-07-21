Project: Small Server – Simple Interest Calculator
This is a Simple Interest (SI) calculator web app. While the interface looks basic, there’s a twist — the SI calculation is handled entirely on the backend, not in the HTML page.

🌐 Frontend Overview
- The user provides three input values (likely principal, rate, and time).
- These values are sent to the backend using JavaScript's fetch() method as query parameters.
- To optimize server load, I’ve implemented debouncing:
- When the user types, the request waits 1 second before going out.
- If input changes during that wait, the timer resets.
- This helps reduce unnecessary requests to the backend.

🧠 Backend Logic
- Built using Express.js and the CORS library.
- CORS enables cross-origin requests, allowing the frontend and backend to communicate even if hosted on different domains.
- The server receives the input values, performs a simple interest calculation, and returns the result.
