import type { Flashcard } from "@/types";

export const flashcards: Flashcard[] = [
  // HTML (8)
  {
    id: "html-1",
    category: "html",
    question: "What does semantic HTML mean?",
    answer:
      "Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer — e.g., <article>, <nav>, <header>, <footer> instead of generic <div> or <span>.",
    keywords: ["semantic", "html", "elements", "meaning"],
  },
  {
    id: "html-2",
    category: "html",
    question: "What is the difference between <section> and <div>?",
    answer:
      "<section> is a semantic element that groups thematically related content and can have its own heading. <div> is a non-semantic generic container with no implied meaning.",
    keywords: ["section", "div", "semantic"],
  },
  {
    id: "html-3",
    category: "html",
    question: "What is the purpose of the alt attribute on <img>?",
    answer:
      "The alt attribute provides alternative text for an image if it cannot be displayed. It also improves accessibility for screen reader users and benefits SEO.",
    keywords: ["alt", "img", "accessibility", "seo"],
  },
  {
    id: "html-4",
    category: "html",
    question: "What is the difference between <strong> and <b>?",
    answer:
      "<strong> indicates strong importance (semantic) and is read with emphasis by screen readers. <b> is purely presentational — bold text with no semantic meaning.",
    keywords: ["strong", "b", "semantic", "bold"],
  },
  {
    id: "html-5",
    category: "html",
    question: "What are data attributes in HTML?",
    answer:
      "Data attributes (data-*) allow you to store custom data private to the page or application directly in HTML elements. Accessible via JavaScript with element.dataset.",
    keywords: ["data", "attributes", "dataset"],
  },
  {
    id: "html-6",
    category: "html",
    question: "What is the purpose of the <meta viewport> tag?",
    answer:
      'The viewport meta tag controls how a webpage is displayed on mobile devices. <meta name="viewport" content="width=device-width, initial-scale=1"> ensures proper scaling on mobile.',
    keywords: ["meta", "viewport", "mobile", "responsive"],
  },
  {
    id: "html-7",
    category: "html",
    question: "What is the difference between <input type=\"button\"> and <button>?",
    answer:
      "<button> is more flexible — it can contain HTML content, has a default type of submit, and is easier to style. <input type='button'> is self-closing and only displays its value as text.",
    keywords: ["button", "input", "form"],
  },
  {
    id: "html-8",
    category: "html",
    question: "What is the async vs defer attribute on <script>?",
    answer:
      "async downloads the script in parallel and executes it as soon as it's ready (may block HTML parsing). defer downloads in parallel but executes after HTML parsing is complete, maintaining order.",
    keywords: ["script", "async", "defer", "loading"],
  },

  // CSS (8)
  {
    id: "css-1",
    category: "css",
    question: "What is the CSS Box Model?",
    answer:
      "The CSS Box Model wraps every HTML element in layers: content → padding → border → margin. box-sizing: border-box includes padding and border inside the element's declared width/height.",
    keywords: ["box model", "padding", "border", "margin"],
  },
  {
    id: "css-2",
    category: "css",
    question: "What is the difference between flexbox and CSS Grid?",
    answer:
      "Flexbox is one-dimensional — it arranges items in a row or column. CSS Grid is two-dimensional — it controls both rows and columns simultaneously. Use Flexbox for components; Grid for page layout.",
    keywords: ["flexbox", "grid", "layout"],
  },
  {
    id: "css-3",
    category: "css",
    question: "What does position: sticky do?",
    answer:
      "A sticky element is treated as relative until it reaches a specified scroll threshold, then it 'sticks' as fixed. It requires a threshold (top/bottom/left/right) and a scrollable parent.",
    keywords: ["position", "sticky", "scroll"],
  },
  {
    id: "css-4",
    category: "css",
    question: "What is CSS specificity?",
    answer:
      "Specificity determines which CSS rule wins when multiple rules target the same element. The order (highest to lowest): inline styles → IDs → classes/attributes/pseudo-classes → elements/pseudo-elements.",
    keywords: ["specificity", "cascade", "selector"],
  },
  {
    id: "css-5",
    category: "css",
    question: "What is a CSS custom property (variable)?",
    answer:
      "Custom properties (--variable-name) store values that can be reused throughout a stylesheet. Declared in a scope (usually :root) and accessed with var(--variable-name).",
    keywords: ["custom property", "variable", "var"],
  },
  {
    id: "css-6",
    category: "css",
    question: "What is the difference between em and rem units?",
    answer:
      "em is relative to the font-size of its parent element. rem (root em) is always relative to the root <html> element's font-size — making it more predictable and easier to work with.",
    keywords: ["em", "rem", "units", "typography"],
  },
  {
    id: "css-7",
    category: "css",
    question: "How does z-index work?",
    answer:
      "z-index controls the stacking order of positioned elements (position: relative/absolute/fixed/sticky). Higher values appear on top. z-index only works on positioned elements or flex/grid children.",
    keywords: ["z-index", "stacking", "position"],
  },
  {
    id: "css-8",
    category: "css",
    question: "What is a CSS pseudo-element?",
    answer:
      "Pseudo-elements (::before, ::after, ::first-line) let you style a specific part of an element without adding HTML. ::before and ::after insert content before/after the element's content.",
    keywords: ["pseudo-element", "before", "after"],
  },

  // JavaScript (10)
  {
    id: "js-1",
    category: "javascript",
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its outer lexical scope even after the outer function has finished executing. It 'closes over' the variables from its containing scope.",
    keywords: ["closure", "scope", "lexical"],
  },
  {
    id: "js-2",
    category: "javascript",
    question: "What is the difference between == and ===?",
    answer:
      "== checks equality after type coercion (loose equality). === checks equality without type coercion (strict equality). Always prefer === to avoid unexpected behavior from implicit coercion.",
    keywords: ["equality", "coercion", "strict"],
  },
  {
    id: "js-3",
    category: "javascript",
    question: "What is event delegation?",
    answer:
      "Event delegation attaches a single event listener to a parent element instead of each child. The event bubbles up from the target to the parent, where you identify the actual target using event.target.",
    keywords: ["event delegation", "bubbling", "event listener"],
  },
  {
    id: "js-4",
    category: "javascript",
    question: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable has been declared but not assigned a value. null is an intentional absence of value — it must be explicitly assigned. typeof null === 'object' is a known JS quirk.",
    keywords: ["null", "undefined", "types"],
  },
  {
    id: "js-5",
    category: "javascript",
    question: "What are Promises and how do they work?",
    answer:
      "A Promise represents an asynchronous operation that will eventually resolve or reject. Promises have three states: pending, fulfilled, rejected. You chain .then() for success and .catch() for errors.",
    keywords: ["promise", "async", "resolve", "reject"],
  },
  {
    id: "js-6",
    category: "javascript",
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and hoisted (with value undefined). let is block-scoped and hoisted but not initialized (TDZ). const is block-scoped, hoisted, and must be initialized — its binding cannot be reassigned.",
    keywords: ["var", "let", "const", "scope", "hoisting"],
  },
  {
    id: "js-7",
    category: "javascript",
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop monitors the call stack and callback queue. When the call stack is empty, it moves callbacks from the queue to the stack for execution. This enables non-blocking async behaviour in single-threaded JS.",
    keywords: ["event loop", "call stack", "async"],
  },
  {
    id: "js-8",
    category: "javascript",
    question: "What is destructuring in JavaScript?",
    answer:
      "Destructuring extracts values from arrays or properties from objects into distinct variables. Array: const [a, b] = [1, 2]. Object: const { name, age } = user. Supports defaults and renaming.",
    keywords: ["destructuring", "array", "object", "es6"],
  },
  {
    id: "js-9",
    category: "javascript",
    question: "What is the spread operator (...)?",
    answer:
      "The spread operator expands an iterable (array, string, object) into individual elements. Uses: copy arrays [...arr], merge objects {...a, ...b}, pass array as function args fn(...args).",
    keywords: ["spread", "rest", "es6"],
  },
  {
    id: "js-10",
    category: "javascript",
    question: "What is a higher-order function?",
    answer:
      "A higher-order function either accepts functions as arguments or returns a function. Examples: Array.map(), Array.filter(), Array.reduce(). They enable functional programming patterns.",
    keywords: ["higher-order", "function", "map", "filter", "reduce"],
  },

  // TypeScript (7)
  {
    id: "ts-1",
    category: "typescript",
    question: "What is the difference between interface and type in TypeScript?",
    answer:
      "Both define shapes. Interfaces can be extended with extends and merged via declaration merging. Types are more flexible — can represent unions, intersections, primitives, and tuples. Prefer interfaces for objects, types for complex types.",
    keywords: ["interface", "type", "typescript"],
  },
  {
    id: "ts-2",
    category: "typescript",
    question: "What are generics in TypeScript?",
    answer:
      "Generics let you write reusable, type-safe code that works with any type. Example: function identity<T>(arg: T): T { return arg; } — T is a type placeholder filled in at call time.",
    keywords: ["generics", "typescript", "reusable"],
  },
  {
    id: "ts-3",
    category: "typescript",
    question: "What is the any type and why should you avoid it?",
    answer:
      "any disables TypeScript's type checking for that value — it can be assigned to and from anything. Avoid it because it defeats the purpose of TypeScript. Use unknown for safer dynamic typing.",
    keywords: ["any", "unknown", "typescript"],
  },
  {
    id: "ts-4",
    category: "typescript",
    question: "What is a union type in TypeScript?",
    answer:
      "A union type allows a value to be one of several types: type ID = string | number. You can narrow union types with typeof, instanceof, or type guards to work with the specific type safely.",
    keywords: ["union", "type guard", "typescript"],
  },
  {
    id: "ts-5",
    category: "typescript",
    question: "What does the readonly keyword do?",
    answer:
      "readonly makes an object property immutable after initialization — it cannot be reassigned. Example: interface Point { readonly x: number; readonly y: number; }. Useful for preventing mutations.",
    keywords: ["readonly", "immutable", "typescript"],
  },
  {
    id: "ts-6",
    category: "typescript",
    question: "What are utility types in TypeScript?",
    answer:
      "Built-in generic types that transform types: Partial<T> (all optional), Required<T> (all required), Readonly<T>, Pick<T, K> (subset of keys), Omit<T, K> (exclude keys), Record<K, V>.",
    keywords: ["utility types", "partial", "pick", "omit", "typescript"],
  },
  {
    id: "ts-7",
    category: "typescript",
    question: "What is type narrowing?",
    answer:
      "Type narrowing refines a broad type to a more specific type within a conditional block. Methods: typeof, instanceof, 'in' operator, equality checks, discriminated unions, and type predicates (is).",
    keywords: ["narrowing", "type guard", "typeof", "instanceof"],
  },

  // React (9)
  {
    id: "react-1",
    category: "react",
    question: "What is the difference between state and props?",
    answer:
      "Props are read-only data passed from a parent to a child component. State is mutable data managed within a component. Props come from outside; state is internal and triggers re-renders when updated.",
    keywords: ["state", "props", "react"],
  },
  {
    id: "react-2",
    category: "react",
    question: "What does useEffect do?",
    answer:
      "useEffect runs side effects after render. The dependency array controls when it runs: [] runs once on mount, [dep] runs when dep changes, no array runs after every render. Return a cleanup function to prevent memory leaks.",
    keywords: ["useEffect", "side effect", "lifecycle", "react"],
  },
  {
    id: "react-3",
    category: "react",
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is an in-memory representation of the real DOM. React compares the new virtual DOM with the previous one (diffing/reconciliation) and only updates the real DOM nodes that changed — improving performance.",
    keywords: ["virtual dom", "reconciliation", "diffing", "react"],
  },
  {
    id: "react-4",
    category: "react",
    question: "What is React Context and when should you use it?",
    answer:
      "Context provides a way to share values (theme, auth, language) across the component tree without prop drilling. Use it for global data accessed by many components. For complex state logic, consider Zustand or Redux.",
    keywords: ["context", "prop drilling", "global state", "react"],
  },
  {
    id: "react-5",
    category: "react",
    question: "What is the purpose of the key prop in lists?",
    answer:
      "Keys help React identify which list items have changed, been added, or removed. They must be unique among siblings. Using array index as a key can cause bugs — prefer stable, unique IDs.",
    keywords: ["key", "list", "reconciliation", "react"],
  },
  {
    id: "react-6",
    category: "react",
    question: "What is useMemo and when should you use it?",
    answer:
      "useMemo memoizes the result of an expensive computation, only recalculating when dependencies change. Use it when a calculation is genuinely expensive (complex data transformations) — not prematurely, as it adds overhead.",
    keywords: ["useMemo", "memoization", "performance", "react"],
  },
  {
    id: "react-7",
    category: "react",
    question: "What is useCallback?",
    answer:
      "useCallback returns a memoized function reference that only changes when dependencies change. Useful when passing callbacks to optimized child components wrapped in React.memo to prevent unnecessary re-renders.",
    keywords: ["useCallback", "memoization", "react"],
  },
  {
    id: "react-8",
    category: "react",
    question: "What are controlled vs uncontrolled components?",
    answer:
      "Controlled components have their form data managed by React state — the input value is driven by state. Uncontrolled components store their own state in the DOM, accessed via refs. Controlled is preferred for validation and dynamic behaviour.",
    keywords: ["controlled", "uncontrolled", "form", "ref", "react"],
  },
  {
    id: "react-9",
    category: "react",
    question: "What is React.memo?",
    answer:
      "React.memo is a HOC that memoizes a component and skips re-rendering if its props haven't changed (shallow comparison). Use it on pure, expensive components. Combined with useCallback for callbacks passed as props.",
    keywords: ["memo", "re-render", "performance", "react"],
  },

  // Interview Questions (8)
  {
    id: "int-1",
    category: "interview-questions",
    question: "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code executes line by line, blocking execution until each operation completes. Asynchronous code allows the program to continue running while waiting for an operation (e.g., network request) to complete via callbacks, Promises, or async/await.",
    keywords: ["synchronous", "asynchronous", "async", "await"],
  },
  {
    id: "int-2",
    category: "interview-questions",
    question: "Explain the concept of 'hoisting' in JavaScript.",
    answer:
      "Hoisting moves variable and function declarations to the top of their scope before execution. var declarations are hoisted and initialized to undefined. Function declarations are fully hoisted. let and const are hoisted but not initialized (Temporal Dead Zone).",
    keywords: ["hoisting", "var", "function", "tdz"],
  },
  {
    id: "int-3",
    category: "interview-questions",
    question: "What is the difference between call, apply, and bind?",
    answer:
      "All three set the 'this' context. call(thisArg, arg1, arg2) invokes immediately with args listed. apply(thisArg, [args]) invokes immediately with args as array. bind(thisArg, arg1) returns a new function — doesn't invoke immediately.",
    keywords: ["call", "apply", "bind", "this"],
  },
  {
    id: "int-4",
    category: "interview-questions",
    question: "What is CORS and how does it work?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts cross-origin HTTP requests. Servers opt-in by including Access-Control-Allow-Origin headers. Preflight OPTIONS requests are sent for complex requests.",
    keywords: ["cors", "cross-origin", "security", "http"],
  },
  {
    id: "int-5",
    category: "interview-questions",
    question: "What is the difference between localStorage and sessionStorage?",
    answer:
      "Both store key-value pairs in the browser. localStorage persists indefinitely until explicitly cleared. sessionStorage is cleared when the browser tab is closed. Both are limited to ~5MB and are synchronous.",
    keywords: ["localStorage", "sessionStorage", "storage"],
  },
  {
    id: "int-6",
    category: "interview-questions",
    question: "What is memoization?",
    answer:
      "Memoization is an optimization technique that caches the results of expensive function calls and returns the cached result when the same inputs occur again. Used in dynamic programming and React (useMemo, React.memo).",
    keywords: ["memoization", "cache", "optimization"],
  },
  {
    id: "int-7",
    category: "interview-questions",
    question: "What is the difference between GET and POST HTTP methods?",
    answer:
      "GET retrieves data — parameters are in the URL, idempotent, can be cached, and bookmarked. POST sends data to create/update — parameters are in the request body, not cached, and not idempotent.",
    keywords: ["get", "post", "http", "rest", "api"],
  },
  {
    id: "int-8",
    category: "interview-questions",
    question: "What is 'this' in JavaScript?",
    answer:
      "'this' refers to the execution context of a function. In a method, it's the owning object. In a regular function (non-strict), it's the global object. In strict mode, it's undefined. Arrow functions capture 'this' from their lexical scope.",
    keywords: ["this", "context", "arrow function", "bind"],
  },
];

export const getTotalCardCount = () => flashcards.length;
export const getCardsByCategory = (category: string) =>
  flashcards.filter((f) => f.category === category);
