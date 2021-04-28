import mongoose from 'mongoose'


const contactSchema = mongoose.Schema({
    id: String,
    name: String,
    message: String,


})

const ContactMessage = mongoose.model('ContactMessage', contactSchema)


export default ContactMessage