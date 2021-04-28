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


export const createContact = async (req, res) => {
    const contact = req.body
    const newContact = new ContactMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newContact)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}