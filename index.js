class APIHandler {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async get() {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'GET',
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al realizar la solicitud GET:", error);
            throw error;
        }
    }

    async post(data) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error al realizar la solicitud POST:", error);
            throw error;
        }
    }

    async put(id, data) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error al realizar la solicitud PUT:", error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'DELETE',
            });
            if (response.status === 204) {
                return true; 
            } else {
                throw new Error("Error al realizar la solicitud DELETE");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud DELETE:", error);
            throw error;
        }
    }
}

//Ejemplo de uso

/*
const apiUrl = "url de la api";
const apiHandler = new APIHandler(apiUrl);

// Ejemplo de uso:
apiHandler.get()
    .then(data => {
        console.log("Datos obtenidos:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
*/
