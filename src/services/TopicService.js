const url = `http://localhost:8080`;
//const url = `https://wbdv-generic-server.herokuapp.com`;

export const createTopic = (lessonId, topic) => 

    fetch(`${url}/api/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${url}/api/lessons/${lessonId}/topics`) //api/isabelbolger/lessons/lessonId/topics
        .then(response => response.json())

export const findTopic = (topicId) =>
    fetch(`${url}/api/topics/${topicId}` //api/isabelbolger/topics/topicId
    ).then(response => response.json())


export const updateTopic = (topicId, topic) =>
fetch(`${url}/api/topics/${topicId}`, { //api/isabelbolger/topics/${topicId}
    method: 'PUT',
    body: JSON.stringify(topic),
    headers: {
        "content-type": "application/json"
    }
});


export const deleteTopic = (topicId) => {
    
     return fetch(`${url}/api/topics/${topicId}`, { //api/isabelbolger/topics/topicId
        method: 'DELETE',
    });
}

export default {
  deleteTopic,
  findTopicsForLesson,
  updateTopic,
  createTopic
}
  