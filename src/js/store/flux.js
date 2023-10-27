const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		
		actions: {
			
			getContacts: async () => {
				try {
					let response = await fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/nessarz")
					let data = await response.json()
					console.log(data)

					setStore({
						contacts:data
					})
				} catch (error) {
					console.log(error)
				}
			},

			createContact: (data) => {
                const actions = getActions();
                const URL = "https://playground.4geeks.com/apis/fake/contact/";
                const opt = {
                    method: "POST",
                    headers: {
                        "Content-type": "Application/json",
                    },
                    body: JSON.stringify(data),
                };
                fetch(URL, opt)
                    .then((response) => {
                        console.log("Respuesta:", response);
                        if (response.ok) {
                            actions.getContacts();
                            alert("Contacto creado con éxito");
                        } else {
                            alert("Error al crear contacto");
                        }
                    })
                    .catch((error) => {
                        console.log("Error:", error);
                        alert("Error al crear contacto");
                    });
            },

            delete: (id) => {
                const actions = getActions();
                fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
                    method: "DELETE"
                })
                .then (
                    (response) => {
                        console.log("Respuesta", response);
                        if (response.ok) {
                            actions.getContacts();
                            alert("Contacto eliminado con éxito");
                        } else {
                            alert("Error al eliminar contacto");
                        }
                    }
                ) .catch((error) => {
                    console.log("error", error);
                    alert("Error al eliminar contacto")
                })
            },

            upgrade: (id) => {
                return fetch (`https://playground.4geeks.com/apis/fake/contact/${id}`)
                .then ((results) => results.json())
                .catch ((error) => {
                    console.log("error", error);
                })
            },

			}
		}
	};

export default getState;
