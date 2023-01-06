const { response } = require('express');
const Contact = require('../models/Contact');

const getContacts = async (req, res = response) => {

  const contacts = await Contact.find();

  res.json({
    ok: true,
    contacts
  });
}

const createContact = async (req, res = response) => {

  const contact = new Contact(req.body);

  try {

    //contact.email = req.email;

    const contactSave = await contact.save();

    res.json({
      ok: true,
      contact: contactSave
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }
}

module.exports = {
  getContacts,
  createContact
}