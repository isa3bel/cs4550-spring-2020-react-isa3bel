class CourseListServiceClient {
   url = 'https://wbdv-generic-server.herokuapp.com/api/isabelbolger/courses';
   createCourse(course) {
        return fetch(this.url, {
            method: 'POST', 
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
    }
   
  findAllCourses() {
    return fetch(this.url)
        .then(function(response) {
        return response.json()
    });
  }

  findCourseById(courseId) {
      return fetch(`${this.url}/${courseId}`)
          .then((response) => {
              return response.json()
          })
  }
  
  updateCourse(courseId, course) {
      return fetch(`${this.url}/${courseId}`, {
          method: 'PUT',
          body: JSON.stringify(course),
          headers: {
              "content-type": "application/json"
          }
      }).then(response => response.json())
  }
   
   deleteCourse(courseId) {
    return fetch(`${this.url}/${courseId}`, {
        method: 'DELETE',
    }).then(response => response.json());
   }
}

export default CourseListServiceClient;


export const findCourseById = (courseId) => 
     fetch(`https://wbdv-generic-server.herokuapp.com/api/isabelbolger/courses/${courseId}`)
        .then((response) => {
            return response.json()
        })
