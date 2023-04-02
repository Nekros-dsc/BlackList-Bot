
const { Schema, model } = require('mongoose');
const blacklist = new Schema({
    UserID: {
        type: String,
        require: true,
    },
    Reason : {
        type: String,
    },
    Time:{
        type : Date,
        default: Date.now(),
    }
});
module.exports = model("BlackListed Members", blacklist);
