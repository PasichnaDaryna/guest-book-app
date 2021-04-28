import ContactMessage from '../model/contactMessage.js'

export const getContacts = async (req, res) => {

    try {
        const contactMessages = await ContactMessage.find();

        console.log(contactMessages)

        res.status(200).json(contactMessages)
    } catch (error) {

        res.status(404).json({ message: error.message })

    }

}


export const createContact = (req, res) => {
    res.send('Contact Creation')
}