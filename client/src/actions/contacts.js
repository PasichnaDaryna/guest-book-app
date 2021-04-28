import * as api from '../api'


//Action creators

export const getContacts = () => async (dispatch) => {


    try {
        const { data } = await api.fetchContacts()
        dispatch({ type: "FETCH_ALL", payload: data })
    }
    catch (error) {
        console.log(error.message)
    }


}


export const createContact = (contact) => async (dispatch) => {
    try {
        const { data } = await api.createContact(contact)
        dispatch({ type: 'CREATE', payload: data })

    } catch (error) {
        console.log(error)

    }
}

