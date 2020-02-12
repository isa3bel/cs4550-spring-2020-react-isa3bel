const initialState = {
  lessons: []
};

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    // TODO: move all strings to constants
    case "FIND_LESSONS_FOR_MODULE":
      return {
        lessons: action.lessons
      };
    case "DELETE_LESSON":
      return {
        lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
      };
    case "UPDATE_LESSON":
      return {
        lessons: state.lessons.map(lesson =>
          lesson._id === action.lessonId ? action.lesson : lesson
        )
      };
    case 'CREATE_LESSON':
      return {
          lessons: [
              ...state.lessons,
              action.lesson
          ]
      }
    default:
      return state;
  }
};

export default lessonReducer;
