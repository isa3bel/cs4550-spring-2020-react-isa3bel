
  //const url = `https://cs4550-sp2020-isabel-bolger-1.herokuapp.com`;
 const url = `http://localhost:8080`;

  export const createWidget = (tid, widget) => {
    return fetch(`${url}/api/topics/${tid}/widgets`, {
      method: "POST",
      body: JSON.stringify({
        title: "New  Widget"
      }),
      headers: {
        "content-type": "application/json"
      }
    });
  }

  export const findWidgetsForTopic = (tid) => {
    return fetch(
      `${url}/api/topics/${tid}/widgets`
    ).then(response => response.json());
  }

  export const findWidgetById = (tid) => {
    return fetch(
      `${url}/topics/${tid}`
    ).then(response => response.json());
  }

  export const updateWidget = (wid, widget) => {
    console.log("widget " + JSON.stringify(widget));
    return fetch(
      `${url}/api/widgets/${wid}`,
      {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
          "content-type": "application/json"
        }
      }
    );
  }

  export const deleteWidget = (wid) => {
    return fetch(
      `${url}/api/widgets/${wid}`,
      {
        method: "DELETE"
      }
    ).then(response => response.json());
  }
  
   export const findAllWidgets = () => {
      return fetch(`${url}/widgets`)
        .then(response => response.json())
    }

export default {
  createWidget,
  findAllWidgets,
  deleteWidget,
  updateWidget,
  findWidgetsForTopic,
  findWidgetById,
};