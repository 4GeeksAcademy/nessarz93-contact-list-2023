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
			}

			}
		}
	};

export default getState;
