/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NEW_TASK':
      return {
        taskList: [
          {
            title: action.title,
            content: action.content
          }
        ]
      }
    case 'DELETE_NEW_TASK':
      return {
        task: action.payload
      }
    case 'TOGGLE_TASK':
      return {
        task: action.payload
      }
    case 'SET_VISIBILITY_FILTERS':
      return {
        filter: action.payload
      }
    default:
      return state
  }
}
