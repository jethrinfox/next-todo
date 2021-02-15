// Actions
const ADD = "next-chakra/counter/ADD"
const DECREASE = "next-chakra/counter/DECREASE"
const RESET = "next-chakra/counter/RESET"

// Reducer
export default function reducer(
  state = {
    counter: 0,
  },
  action = {}
) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        counter: (state.counter += 1),
      }
    case DECREASE:
      return {
        ...state,
        counter: (state.counter -= 1),
      }
    case RESET:
      return {
        ...state,
        counter: 0,
      }
    default:
      return state
  }
}

// Action Creators
export function addCounter() {
  return { type: ADD }
}

export function decreaseCounter() {
  return { type: DECREASE }
}

export function updateWidget() {
  return { type: RESET }
}
