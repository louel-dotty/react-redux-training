export const addTask = (data) => dispatch => {
  dispatch({
    type: 'ADD_NEW_TASK',
    title: data.title,
    content: data.content,
    status: data.status
  })
}

export const removeTask = (data) => dispatch => {
  dispatch({
    type: 'DELETE_NEW_TASK',
    title: data.title
  })
}

export const toggleTask = (data) => dispatch => {
  dispatch({
    type: 'TOGGLE_TASK',
    title: data.title,
    status: data.status
  })
}

export const filterTask = (data) => dispatch => {
  dispatch({
    type: 'SET_VISIBILITY_FILTERS',
    filter: data.filter
  })
}
