const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        // required: [true, 'Roll field is required']
    },
    email: {
        type: Boolean,
        deafult: true
    },
    location: {
        type: String,
    }
});


const Student = mongoose.model('student',StudentSchema);

module.exports = Student;
