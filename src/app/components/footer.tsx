'use client'

import { useState, useReducer } from "react";

function reducer(state:any, action:any):any {
  switch (action.type) {
    case "add-task":
      return {
        tasks: [... state.tasks, action.task]
      }
  }
}

export default function Chat() {
    const [state, dispatch] = useReducer(reducer, {tasks: []})
    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <form>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            </form>

            <button onClick={() => dispatch({type: 'add-task', inputValue})}></button>
        </div>
    )
}