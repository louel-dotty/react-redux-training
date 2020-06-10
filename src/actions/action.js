export const addTask = (data) => dispatch => {
  dispatch({
    type: 'ADD_NEW_TASK',
    payload: data
  })
}

export const removeTask = (data) => dispatch => {
  dispatch({
    type: 'DELETE_NEW_TASK',
    payload: data
  })
}

export const toggleTask = (data) => dispatch => {
  dispatch({
    type: 'TOGGLE_TASK',
    payload: data
  })
}

export const filterTask = (data) => dispatch => {
  dispatch({
    type: 'SET_VISIBILITY_FILTERS',
    payload: data
  })
}
