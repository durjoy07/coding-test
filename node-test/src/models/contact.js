import Mongoose from 'mongoose';
import MongooseTimeStamp from 'mongoose-timestamp';
const Schema = Mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true }
});

contactSchema.plugin(MongooseTimeStamp);

contactSchema.pre('save', function (next) {
    var contact = this;
    if (this.isModified('mobileNumber') || this.isNew) {
        const num = "+880" + contact.mobileNumber.slice(-10);
        contact.mobileNumber = num;
        next();
    } else {
        return next();
    }
});


const Contact = Mongoose.model("Contact", contactSchema);
module.exports = {
    Contact
}
