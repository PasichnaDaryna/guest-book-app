import express from 'express'

import { getContacts, createContact } from '../controllers/contacts.js'

const router = express.Router();

// http://localhost:5000/contacts

router.get('/', getContacts)
router.post('/', createContact)

export default router