// ===========================> Action Types <=========================== //

export const LOGIN = 'spa/login'

// ===========================> Actions <=========================== //

// ===========================> Reducer <=========================== //

let initState = {}

export const userLogin = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
