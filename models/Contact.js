const { Schema, model } = require('mongoose');

const ContactSchema = Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  message: {
    type: String
  }
});

ContactSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});



module.exports = model('Contact', ContactSchema);

