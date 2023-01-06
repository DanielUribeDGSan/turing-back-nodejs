/*
    Contact Routes
    /api/contacts
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validateInputs } = require('../middlewares/validate-inputs');
const { getContacts, createContact, } = require('../controllers/contacts');

const router = Router();

// Obtener contactos 
router.get('/', getContacts);

// Crear un nuevo contacto
router.post(
  '/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('phone', 'El teléfono es obligatorio').not().isEmpty(),
    check('company', 'La compañia es obligatoria').not().isEmpty(),
    check('jobTitle', 'El título de trabajo es obligatorio').not().isEmpty(),
    check('city', 'La ciudad es obligatoria').not().isEmpty(),
    validateInputs
  ],
  createContact
);

module.exports = router;