const conceptsData = [
  {
    id: 1,
    name: "Variables",
    description:
      "Variables are used to store data that can be referenced and manipulated in a program.",
    // image: "/variable.jpg",
    quizQuestion: "What is a variable?",
    quizOptions: ["A value that can change", "A constant value", "A function"],
    quizAnswer: "A value that can change",
  },
  {
    id: 2,
    name: "Functions",
    description:
      "Functions are blocks of reusable code that perform a specific task.",
    // image: "/function.jpg",
    quizQuestion: "What are functions?",
    quizOptions: ["Variables", "Loops", "Blocks of reusable code"],
    quizAnswer: "Blocks of reusable code",
  },
  {
    id: 3,
    name: "Arrays",
    description:
      "Arrays are special variables that can hold more than one value at a time.",
    // image: "/array.jpg",
    quizQuestion: "What is an array in JavaScript?",
    quizOptions: [
      "A single value",
      "A data structure that holds more than one value at a time",
      "A function",
    ],
    quizAnswer: "A data structure that holds more than one value at a time",
  },
  {
    id: 4,
    name: "Objects",
    description: "Objects in JavaScript are collections of key-value pairs.",
    // image: "/object.jpg",
    quizQuestion: "What are objects in JavaScript?",
    quizOptions: [
      "A way to perform arithmetic operations",
      "Collections of key-value pairs",
      "Special variables that hold more than one value at a time",
    ],
    quizAnswer: "Collections of key-value pairs",
  },
  {
    id: 5,
    name: "Loops",
    description: "Loops are used to repeatedly execute a block of code.",
    // image: "/loop.jpg",
    quizQuestion: "What are loops used for in JavaScript?",
    quizOptions: [
      "To store data that can be referenced and manipulated",
      "To repeatedly execute a block of code",
      "To define a function",
    ],
    quizAnswer: "To repeatedly execute a block of code",
  },
  {
    id: 6,
    name: "Conditional Statements",
    description:
      "Conditional statements are used to perform different actions based on different conditions.",
    // image: "/conditional.jpg",
    quizQuestion: "What are conditional statements in JavaScript?",
    quizOptions: [
      "Statements that define a block of code to be executed repeatedly",
      "Statements that assign a value to a variable",
      "Statements that perform different actions based on different conditions",
    ],
    quizAnswer:
      "Statements that perform different actions based on different conditions",
  },
  {
    id: 7,
    name: "Scope",
    description: "Scope defines the accessibility (visibility) of variables.",
    // image: "/scope.jpg",
    quizQuestion: "What is scope in JavaScript?",
    quizOptions: [
      "A way to execute a function immediately after its definition",
      "The accessibility of variables",
      "A way to sort the elements of an array",
    ],
    quizAnswer: "The accessibility of variables",
  },
  {
    id: 8,
    name: "DOM Manipulation",
    description:
      "DOM manipulation refers to changing the structure, style, or content of a web page through JavaScript.",
    // image: "/dom.jpg",
    quizQuestion: "What is DOM manipulation in JavaScript?",
    quizOptions: [
      "Changing the structure, style, or content of a web page through JavaScript",
      "A method to store data in local storage",
      "A way to validate form inputs",
    ],
    quizAnswer:
      "Changing the structure, style, or content of a web page through JavaScript",
  },
  {
    id: 9,
    name: "Event Handling",
    description:
      "Event handling involves responding to user interactions with a web page, such as clicks or keyboard input.",
    // image: "/event.jpg",
    quizQuestion: "What is event handling in JavaScript?",
    quizOptions: [
      "Executing a function immediately after its definition",
      "Responding to user interactions with a web page",
      "A way to declare variables",
    ],
    quizAnswer: "Responding to user interactions with a web page",
  },
  {
    id: 10,
    name: "Promises",
    description:
      "Promises are a way to handle asynchronous operations in JavaScript.",
    // image: "/promise.jpg",
    quizQuestion: "What are promises in JavaScript?",
    quizOptions: [
      "A way to handle synchronous operations",
      "A way to handle asynchronous operations",
      "A way to store data in memory",
    ],
    quizAnswer: "A way to handle asynchronous operations",
  },
  {
    id: 11,
    name: "Arrow Functions",
    description:
      "Arrow functions provide a concise syntax for writing function expressions in JavaScript.",
    // image: "/arrow-function.jpg",
    quizQuestion: "What are arrow functions in JavaScript?",
    quizOptions: [
      "Functions that execute immediately after their definition",
      "Functions that use the 'function' keyword",
      "Functions with a concise syntax using the '=>' arrow",
    ],
    quizAnswer: "Functions with a concise syntax using the '=>' arrow",
  },
  {
    id: 12,
    name: "Modules",
    description:
      "Modules allow developers to split their code into separate files, making it easier to manage and reuse.",
    // image: "/modules.jpg",
    quizQuestion: "What are modules in JavaScript?",
    quizOptions: [
      "A way to execute code immediately after its definition",
      "A way to split code into separate files for easier management",
      "A way to create arrays",
    ],
    quizAnswer: "A way to split code into separate files for easier management",
  },
  {
    id: 13,
    name: "Closures",
    description:
      "Closures are functions that have access to the outer function's scope even after the outer function has finished executing.",
    // image: "/closure.jpg",
    quizQuestion: "What are closures in JavaScript?",
    quizOptions: [
      "Functions that execute immediately after their definition",
      "Functions with a concise syntax using the '=>' arrow",
      "Functions that have access to the outer function's scope",
    ],
    quizAnswer: "Functions that have access to the outer function's scope",
  },
  {
    id: 14,
    name: "Prototype",
    description:
      "Prototype is an object that is associated with every function and object by default in JavaScript.",
    // image: "/prototype.jpg",
    quizQuestion: "What is prototype in JavaScript?",
    quizOptions: [
      "A way to handle asynchronous operations",
      "An object associated with every function and object by default",
      "A method to store data in local storage",
    ],
    quizAnswer:
      "An object associated with every function and object by default",
  },
  {
    id: 15,
    name: "AJAX",
    description:
      "AJAX allows you to send and receive data asynchronously without reloading the web page.",
    // image: "/ajax.jpg",
    quizQuestion: "What is AJAX in JavaScript?",
    quizOptions: [
      "A way to validate form inputs",
      "A method to execute code immediately after its definition",
      "A technique for sending and receiving data asynchronously",
    ],
    quizAnswer: "A technique for sending and receiving data asynchronously",
  },
  {
    id: 16,
    name: "Error Handling",
    description:
      "Error handling involves managing errors that may occur during the execution of a program.",
    // image: "/error.jpg",
    quizQuestion: "What is error handling in JavaScript?",
    quizOptions: [
      "A way to split code into separate files for easier management",
      "A way to manage errors that may occur during program execution",
      "A way to create arrays",
    ],
    quizAnswer:
      "A way to manage errors that may occur during program execution",
  },
  {
    id: 17,
    name: "Template Literals",
    description:
      "Template literals are string literals that allow for embedded expressions.",
    // image: "/template.jpg",
    quizQuestion: "What are template literals in JavaScript?",
    quizOptions: [
      "String literals that allow for embedded expressions",
      "A way to execute code immediately after its definition",
      "A method to handle asynchronous operations",
    ],
    quizAnswer: "String literals that allow for embedded expressions",
  },
  {
    id: 18,
    name: "Asynchronous JavaScript",
    description:
      "Asynchronous JavaScript allows certain operations to be executed independently of the main program flow.",
    // image: "/async.jpg",
    quizQuestion: "What is asynchronous JavaScript?",
    quizOptions: [
      "A way to define variables",
      "A method to execute code immediately after its definition",
      "A mechanism that allows certain operations to be executed independently of the main program flow",
    ],
    quizAnswer:
      "A mechanism that allows certain operations to be executed independently of the main program flow",
  },
  {
    id: 19,
    name: "ES6 Features",
    description:
      "ES6 introduced several new features and syntax enhancements to JavaScript.",
    // image: "/es6.jpg",
    quizQuestion: "What are ES6 features in JavaScript?",
    quizOptions: [
      "A set of features and syntax enhancements introduced in JavaScript",
      "A method to validate form inputs",
      "A technique for handling asynchronous operations",
    ],
    quizAnswer:
      "A set of features and syntax enhancements introduced in JavaScript",
  },
  {
    id: 20,
    name: "Destructuring",
    description:
      "Destructuring allows you to extract elements from arrays and properties from objects into distinct variables.",
    // image: "/destructuring.jpg",
    quizQuestion: "What is destructuring in JavaScript?",
    quizOptions: [
      "A way to define variables",
      "A method to execute code immediately after its definition",
      "A technique to extract elements from arrays and properties from objects",
    ],
    quizAnswer:
      "A technique to extract elements from arrays and properties from objects",
  },
  {
    id: 21,
    name: "Type Coercion",
    description:
      "Type coercion is the process of converting one data type to another in JavaScript.",
    // image: "/coercion.jpg",
    quizQuestion: "What is type coercion in JavaScript?",
    quizOptions: [
      "A mechanism to define variables",
      "A way to handle asynchronous operations",
      "The process of converting one data type to another",
    ],
    quizAnswer: "The process of converting one data type to another",
  },
  {
    id: 22,
    name: "Strict Mode",
    description:
      "Strict mode is a way to introduce better error-checking and error-handling into your JavaScript code.",
    // image: "/strict.jpg",
    quizQuestion: "What is strict mode in JavaScript?",
    quizOptions: [
      "A method to define variables",
      "A technique to handle asynchronous operations",
      "A way to introduce better error-checking and error-handling into your code",
    ],
    quizAnswer:
      "A way to introduce better error-checking and error-handling into your code",
  },
  {
    id: 23,
    name: "Map",
    description:
      "The Map object holds key-value pairs and remembers the original insertion order of the keys.",
    // image: "/map.jpg",
    quizQuestion: "What is the Map object in JavaScript?",
    quizOptions: [
      "An object that holds key-value pairs and remembers the original insertion order of the keys",
      "A method to validate form inputs",
      "A technique for handling asynchronous operations",
    ],
    quizAnswer:
      "An object that holds key-value pairs and remembers the original insertion order of the keys",
  },
  {
    id: 24,
    name: "Set",
    description:
      "The Set object lets you store unique values of any type, whether primitive values or object references.",
    // image: "/set.jpg",
    quizQuestion: "What is the Set object in JavaScript?",
    quizOptions: [
      "An object that lets you store unique values of any type",
      "A way to define variables",
      "A method to execute code immediately after its definition",
    ],
    quizAnswer: "An object that lets you store unique values of any type",
  },
  {
    id: 25,
    name: "Promises",
    description:
      "Promises represent a value that may be available now, or in the future, or never.",
    // image: "/promises.jpg",
    quizQuestion: "What do Promises represent in JavaScript?",
    quizOptions: [
      "A way to handle synchronous operations",
      "A mechanism to represent a value that may be available now, or in the future, or never",
      "A technique for sorting elements of an array",
    ],
    quizAnswer:
      "A mechanism to represent a value that may be available now, or in the future, or never",
  },
  {
    id: 26,
    name: "Prototype Chain",
    description:
      "The prototype chain is a mechanism for inheritance in JavaScript.",
    // image: "/prototypechain.jpg",
    quizQuestion: "What is the prototype chain in JavaScript?",
    quizOptions: [
      "A way to define variables",
      "A mechanism for inheritance",
      "A method to handle asynchronous operations",
    ],
    quizAnswer: "A mechanism for inheritance",
  },
  {
    id: 27,
    name: "Regular Expressions",
    description:
      "Regular Expressions are patterns used to match character combinations in strings.",
    // image: "/regex.jpg",
    quizQuestion: "What is a Regular Expression in JavaScript?",
    quizOptions: [
      "A method to define variables",
      "Patterns used to match character combinations in strings",
      "A way to handle asynchronous operations",
    ],
    quizAnswer: "Patterns used to match character combinations in strings",
  },
];

export default conceptsData;
