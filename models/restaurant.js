var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RestaurantSchema = new Schema({
    nimi: {
        type: String,
        required: [true, 'Nimi on pakollinen!']
    },
    osoite: {
        type: String,
        required: [true, 'Osoite on pakollinen!']
    },
    kaupunki: {
        type: String,
        required: [true, 'Kaupunki on pakollinen!']
    },
    puh: {
        type: String
    },
    arvosana: {
            type: Number,
            default: 0
    },
    kommentit: [{
        otsikko: {
            type: String,
            required: [true, 'Otsikko on pakollinen!']
        },
        arvosana: {
            type: Number,
            required: [true, 'Arvosana on pakollinen!'],
            min: [0, 'Yksi on pienin arvosana!'],
            max: 5
        },
        arvio: {
            type: String,
            required: [true, 'Arvio on pakollinen!']
        },
        lahettaja: {
            type: String,
            required: [true, 'Lähettäjä on pakollinen!']
        },
        ravintolanvastaus: {
            type: String,
            default: ""
        }
    }]

}, {collection: 'ravintolat'});



const Restaurant = mongoose.model('ravintolat', RestaurantSchema);


module.exports = Restaurant;