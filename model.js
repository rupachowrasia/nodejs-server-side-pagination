const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pagination', { useNewUrlParser: true, useUnifiedTopology: true }).then(
	() => { console.log("connected")},
	err => { console.log("not connected") }
);
const Schema = mongoose.Schema;
const userSchema = new Schema({
	"first_name": String,
	"last_name": String,
	"email": String,
	"gender": String,
	"ip_address": String
});
module.exports = mongoose.model('Users', userSchema);
