const API = {
    getAll: (resource) => {
        return fetch(`http://localhost:8088/${resource}`)
        .then(resp => resp.json())
    }
}

export {API};