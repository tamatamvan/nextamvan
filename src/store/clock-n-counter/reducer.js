const exampleInitialState = () => ({
  lastUpdate: 0,
  light: false,
  count: 0
})

// REDUCERS
export default (state = { ...exampleInitialState() }, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return ({
        ...state,
        lastUpdate: action.ts,
        light: !!action.light 
      })
    case actionTypes.ADD:
      return ({ 
        ...state, 
        count: state.count + 1
      })
    default: return state
  }
}