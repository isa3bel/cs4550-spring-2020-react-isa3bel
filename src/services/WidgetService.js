class WidgetService {
  url = `https://localhost:8080`;

  createWidget(tid, widget) {
    return fetch(
      `${this.url}/widgets`,
      {
        method: "POST",
        body: JSON.stringify({
          id: (new Date()).getTime() + "",
          title: "New Widget"
        }),
        headers: {
          "content-type": "application/json"
        }
      }
    ).then(response => response.json());
  }

  findWidgetsForTopic(tid) {
    fetch(
      `https://localhost:8080/api/lessons/${tid}/topics`
    ).then(response => response.json());
  }

  // findWidgetById(tid) {
  //   fetch(
  //     `https://wbdv-generic-server.herokuapp.com/api/isabelbolger/topics/${tid}`
  //   ).then(response => response.json());
  // }

  updateWidget(wid, widget) {
    fetch(
      `${this.url}/api/widgets/${wid}`,
      {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
          "content-type": "application/json"
        }
      }
    ).then(response => response.json());
  }

  deleteWidget(wid) {
    fetch(
      `${this.url}/api/widgets/${wid}`,
      {
        method: "DELETE"
      }
    ).then(response => response.json());
  }
  
    findAllWidgets() {
      return fetch(`http://localhost:8080/widgets`)
        .then(response => response.json())
    }

}
  

export default WidgetService;