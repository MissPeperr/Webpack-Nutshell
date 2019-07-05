const API = {
    getAll: (resource) => {
        return fetch(`http://localhost:8088/${resource}`)
        .then(resp => resp.json())
    },
    createNew: (resource, dataObject) => {
        return fetch(`http://localhost:8088/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(dataObject)
            })
            .then(response => response.json())
    }
}

export {API};