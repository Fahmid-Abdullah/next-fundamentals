"use client"

import { useRouter } from "next/navigation"
import { memo, useCallback, useMemo, useReducer, useState } from "react";

// Welcome to Lesson 7! This is the final lesson on hooks. In this lesson, we will be covering useMemo, useCallback, and useReducer

// useMemo is a hook used to cache results of a function between re-renders. It's main benefit is when the result of an expensive calculation 
// is needed multiple times. Look at the expensive calculation example.
// What you can notice in the console logs is that no matter what state changes, the expensiveCalculationWithoutMemo is called. But the memoized
// function expensiveCalculationWithMemo is only called when increment button is pressed (count changes).

// useCallback is a React hook used to memoize (i.e., cache) a function definition between re-renders.
// Its main benefit is preventing unnecessary re-creations of functions unless their dependencies change.
// A common use case is when a parent component passes callback functions to child components.
// Normally, on every re-render, new function instances are created, which can trigger unnecessary re-renders
// in child components if those functions are passed as props.

// For example, imagine a dark mode toggle that causes the entire parent component to re-render.
// If you pass un-memoized functions to child components (like buttons), React sees new function references
// and re-renders those children, even if nothing relevant to them has changed.

// useCallback helps by keeping the same function reference as long as its dependencies haven't changed.
// However, using useCallback alone is not enough to prevent child re-renders.
// You also need to wrap the child components in React.memo.
// React.memo does a shallow comparison of props and prevents re-rendering if the props haven't changed.

// So, by combining useCallback for functions and React.memo for components,
// you ensure that child components only re-render when they actually need to —
// that is, when their props (including callback functions) change.

// Look at the useCallback example below. The button is wrapped in useMemo and handleClick is wrapped in useCallback.
// And so the component nor the function will not be recreated unnecessarily. For this example I didn't add in any dependencies.

// Challenge:
// Create a toggle button that switches the color scheme of the other buttons (e.g., green ↔ blue).
// When the toggle is pressed, the individual buttons should re-render with the new color.
// Use useCallback and React.memo correctly to avoid unnecessary re-renders.

// Finally, we will go over useReducer. This hook is used to manage complex state logic. It is an alternative to useState.
// It is not something that is typically used so I will just go over a brief example. Check out UseReducerExample.

const ExpensiveCalculationExample = () => {
  const [count, setCount] = useState(0);
  const [dummy, setDummyCount] = useState(0);

  const expensiveCalculationWithMemo = useMemo(() => {
    console.log("Expensive Calculation With useMemo");
    return count ** 123456789
  }, [count])

  const expensiveCalculationWithoutMemo = () => {
    console.log("Expensive Calculation Without useMemo");
    return count ** 123456789;
  }

  return (
      <div className="space-x-4">
        <h2>useMemo Example</h2>
        <p>Expensive Calculation With useMemo{expensiveCalculationWithMemo}</p>
        <p>Expensive Calculation Without useMemo{expensiveCalculationWithoutMemo()}</p>
        <button className="px-4 py-2 w-xs text-xl font-bold bg-blue-700 hover:bg-blue-800 hover:scale-105 rounded-lg"
        onClick={() => setCount(count + 1)}>Increment</button>
        <button className="px-4 py-2 w-xs text-xl font-bold bg-orange-700 hover:bg-orange-800 hover:scale-105 rounded-lg"
        onClick={() => setDummyCount(dummy + 1)}>Arbitrary Button</button>
      </div>
  )
}

const Button = memo(({btnNumber, handleClick}: {btnNumber: number, handleClick: (btnNumber: number) => void}) => {
    return (
        <button className="px-4 py-2 w-xs text-xl font-bold bg-green-700 hover:bg-green-800 hover:scale-105 rounded-lg"
        onClick={() => handleClick(btnNumber)}>Button {btnNumber}</button>
    )
})

const UseCallbackExample = () => {
    const btnNumbers = [1,2, 3, 4, 5, 6]

    const handleClick = useCallback((btnNumber: number) => {
        console.log(`Button ${btnNumber} has been pressed.`)
    }, [])

    return (
        <div>
            <h2>useCallback Example</h2>
            <div className="flex flex-col gap-2">
                {
                    btnNumbers.map((btn) => (
                        <Button key={btn} btnNumber={btn} handleClick={handleClick} />
                    ))
                }
            </div>
        </div>
    )
}

type State = {
  count: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

// 3. Set initial state
const initialState: State = { count: 0 };

// 4. Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unhandled action type");
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 space-y-4">
        <h2>useReducer Example</h2>
      <h2 className="text-xl font-bold">Count: {state.count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 px-3 py-1 text-white rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 px-3 py-1 text-white rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-500 px-3 py-1 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const Lesson7 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold">Lesson 7: useMemo, useCallback, useReducer</h2>
      <p className="text-red-300">Note: Majority of the lesson instructions will be in the page.tsx for the corresponding lesson.</p>
      
        {/* useMemo example */}
        <ExpensiveCalculationExample />

        {/* useCallback example */}
        <UseCallbackExample />

        {/* useReducer example */}
        <UseReducerExample />

      <button 
        className="mt-8 px-4 py-2 w-lg text-xl font-bold bg-red-700 hover:bg-red-800 hover:scale-105 rounded-lg"
        onClick={() => router.push('/lessons/8')}>
        Next Lesson
      </button>
    </div>
  )
}

export default Lesson7;