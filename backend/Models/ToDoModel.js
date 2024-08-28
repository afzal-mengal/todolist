const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, "ToDo description is required"],
    },
    userId: {
        type: String,
        required: [true, "user id is required"],
        unique: false
    }
});

module.exports = mongoose.model("ToDo", toDoSchema);