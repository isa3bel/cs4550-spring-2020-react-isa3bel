const initialState = {
  modules: []
};



const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    // TODO: move all strings to constants
    case "FIND_MODULES_FOR_COURSE":
      return {
        modules: action.modules
      };
    case "FIND_ALL_MODULES":
      return {
        modules: action.modules
      };
    case "CREATE_MODULE":
      return {
        modules: [...state.modules, action.newModule]
      };
    case "UPDATE_MODULE":
      return {
        modules: state.modules.map(module =>
          module._id === action.newModule._id ? action.newModule : module
        )
      };
    case "DELETE_MODULE":
      return {
        modules: state.modules.filter(module => module._id !== action.moduleId)
      };
    default:
      return state;
  }
};

export default moduleReducer;
