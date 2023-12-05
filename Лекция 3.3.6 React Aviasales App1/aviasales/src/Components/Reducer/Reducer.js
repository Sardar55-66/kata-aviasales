
const initialState = {
  cheap: false,
  fast: false,
  optimal: false
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case 'CHEAP': return Object.assign({}, state, {cheap: !state.cheap, fast : false, optimal: false})
        case 'OPTIMAL': return Object.assign({}, state, {optimal: !state.optimal, fast: false, cheap: false})
        case 'FAST': return Object.assign({}, state, {fast: !state.fast, optimal: false, cheap: false})
      default: return state
    }
  }

export default reducer