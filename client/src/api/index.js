import axios from 'axios'

const url = 'http://localhost:5000/contacts';

export const fetchContacts = () => axios.get(url)
export const createContact = (newContact) => axios.post(url, newContact)