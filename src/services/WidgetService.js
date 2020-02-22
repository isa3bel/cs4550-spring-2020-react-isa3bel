class WidgetService {
  url = `https://cs4550-sp2020-isabel-bolger-1.herokuapp.com`;

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

  findWidgetById(tid) {
    fetch(
      `https://cs4550-sp2020-isabel-bolger-1.herokuapp.com/topics/${tid}`
    ).then(response => response.json());
  }

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
      return fetch(`https://cs4550-sp2020-isabel-bolger-1.herokuapp.com/widgets`)
        .then(response => response.json())
    }

}
  

export default WidgetService;