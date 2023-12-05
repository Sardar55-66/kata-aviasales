
const tabsInitialState = {
  cheap: false,
  fast: false,
  optimal: false,  
}

export const tabsReducer = function (state = tabsInitialState, action) {
    switch (action.type) {
        case 'CHEAP': return Object.assign({}, state, {cheap: !state.cheap, fast : false, optimal: false})
        case 'OPTIMAL': return Object.assign({}, state, {optimal: !state.optimal, fast: false, cheap: false})
        case 'FAST': return Object.assign({}, state, {fast: !state.fast, optimal: false, cheap: false})
      default: return state
    }
  }


  let filtersInitialState =  {
    filters : []
  }

  export const filtersReducer = (state = filtersInitialState, action) => {



    switch (action.type) {
      case 'ADD_FILTER': return {...state, filters: [...state.filters, action.payload]}
      case 'ADD_ALL_FILTERS': return{...state, filters: [...['ALL', 'NO', 'ONE', 'TWO', 'THREE']]}
      case 'ADD_FIRST_FILTER': return {...state, filters: [...state.filters, action.payload]}
    
      case 'REMOVE_ONE_FILTER': return {...state, filters: [...state.filters.filter(el => el !== action.payload)]}
      case 'REMOVE_ALL_FILTERS': return{...state, filters: []}
      case 'REMOVE_FIRST_FILTER': return {...state, filters: [...state.filters.filter(el => el !== action.payload)]}
      
        
      default:
        return state;
    }
  }