

export const Cheap =  () => ({type: 'CHEAP'})
  
export const Optimal = () => ({type: 'OPTIMAL'})

export const Fast = () => ({type: 'FAST'})

// export const allF = () => ({type: 'ALL', payload: 'Все'})

// export const noTransfersF = () => ({type: 'NO', payload: 'Без пересадок'})

// export const oneTransferF = () => ({type: 'ONE', payload: '1 пересадка'})

// export const twoTransfersF = () => ({type: 'TWO', payload: '2 пересадки'})

// export const threeTransferF = () => ({type: 'THREE', payload: '3 пересадки'})

export const getTickets = (x) => ({type: 'ADD_TICKETS', payload: x})

export const getMoreTicketsData = (x) => ({type: 'ADD_MORE_TICKETS', payload: x})
//export const getError = (err) => ({type: 'HAVE_ERROR', payload: err})
export const spinnerActivate = () => ({type: 'SPIN'})


  