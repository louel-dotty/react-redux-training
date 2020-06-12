/* 
  src/reducers/simpleReducer.js
*/
export default (state = { taskList: [], filter: "all"}, action) => {
  let newState = {};
  switch (action.type) {
    case 'ADD_NEW_TASK':
      return {
        taskList: [
          ...state.taskList,
          {
            title: action.title,
            content: action.content,
            status: action.status
          }
        ]
      }

    case 'DELETE_NEW_TASK':
      newState = {
        taskList: state.taskList.filter(function(value, index, arr){
          return value.title !== action.title;
        }
      )};
      return newState;

    case 'TOGGLE_TASK':
      newState = {
        taskList: state.taskList.forEach(element => {
          if(element.title === action.title){
            switch (element.status){
              case "completed":
                element.status = "ongoing";
                break;
              case "ongoing":
                element.status = "completed";
                break;
              default:
                element.status = "ongoing";
            }
          }
        })
      };
      return newState;

    case 'SET_VISIBILITY_FILTERS':
      return {
        taskList: {...state.taskList},
        filter: action.filter
      }
    default:
      return state
  }
}
