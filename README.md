React
TypeScript
CSS
HTML
Vite
JSON

1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React code easier to write and understand.

2. What is the difference between props and state?

Props are data passed from parent to child. State is data managed inside a component.

3. What does the useState hook do, and where did you use it?

useState manages changing data in a component. I used it to manage the stack items.

4. What does the useEffect hook do, and why did you need it?

useEffect runs code after rendering. I used it to load JSON data when the app starts.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each list item and update it correctly.

6. What is conditional rendering?

Conditional rendering means showing UI based on a condition. I used it to show a message when the stack is empty.

7. How do you pass data from parent to child, and child to parent?

The parent passes data using props. The child sends data back by calling a function passed through props.
