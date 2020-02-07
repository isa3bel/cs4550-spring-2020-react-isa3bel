export const createTopic = (lessonId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const findTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/topics/${topicId}`
    ).then(response => response.json())


export const updateTopic = (topicId, topic) =>
fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/topics/${topicId}`, {
    method: 'PUT',
    body: JSON.stringify(topic),
    headers: {
        "content-type": "application/json"
    }
}).then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/topics/${topicId}`, {
        method: 'DELETE',
    }).then(response => response.json());