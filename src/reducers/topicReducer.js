
const initialState = {
  topics: [
  ]
}

const topicReducer = (state = initialState, action) => {
  switch(action.type) {
      // TODO: move all strings to constants
      case "FIND_TOPICS_FOR_LESSON":
          return {
              topics: action.topics
          }
      case "CREATE_TOPIC":
          return {
            topics: [
                ...state.topics,
                action.newTopic
            ]
        }
      case "UPDATE_TOPIC":
        return {
          topics: state.topics.map(topic =>
            topic._id === action.topic._id ? action.topic : topic
          )
        };
      case "DELETE_TOPIC":
        return {
          topics: state.topics.filter(topic => topic._id !== action.topicId)
      }
      default:
          return state
  }
}

export default topicReducer