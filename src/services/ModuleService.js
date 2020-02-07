
export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/courses/${courseId}/modules`)
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/modules/${moduleId}`, {
        method: "DELETE",
    });
    
export const updateModule = (moduleId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/module/${moduleId}/`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
          "content-type": "application/json"
      }
    }).then(response => response.json())
