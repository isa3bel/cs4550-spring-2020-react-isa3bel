
export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/module/${moduleId}/lessons`)
        .then(response => response.json())

export const createLesson = (moduleId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/module/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify({title: lesson}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/lessons/${lessonId}`
    ).then(response => response.json())


export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/lessons/${lessonId}`, {
        method: 'DELETE',
    }).then(response => response.json());

export const updateLesson = (lessonId, lesson) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/lessons/${lessonId}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
          "content-type": "application/json"
      }
  }).then(response => response.json())


  export default {
    deleteLesson,
    findLessonsForModule,
    updateLesson,
    findLesson,
    createLesson
}
