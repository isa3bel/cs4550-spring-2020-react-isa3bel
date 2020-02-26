export const DELETE_TOPIC = "DELETE_TOPIC"
export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const CREATE_TOPIC = "CREATE_TOPIC"
export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
})

export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const findTopicsForLesson = (actualTopics) => ({
          type: FIND_TOPICS_FOR_LESSON,
          topics: actualTopics
});

export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const updateTopic = (actualTopics) => ({
          type: UPDATE_TOPIC,
          topic: actualTopics
});
