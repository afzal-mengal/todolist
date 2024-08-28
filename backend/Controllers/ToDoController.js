const ToDo = require("../Models/ToDoModel");
const User = require("../Models/UserModel");

module.exports.addToDo = async (req, res, next) => {
    try {
        const { item, userId } = req.body;
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.json({ message: "User does not exist" });
        }
        else {
            const toDo = await ToDo.create({ item, userId });
            res
                .status(201)
                .json({ message: "New ToDo added succesfuly", success: true, toDo });
            next();
        }
    }
    catch (error) {
        console.log(error);
    }
};

module.exports.getToDos = async (req, res, next) => {
    try {
        const userId = String(req.query.userid);
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.json({ message: "User does not exist" });
        }
        else {
            const toDos = await ToDo.find({ userId: userId });
            res
                .status(201)
                .json({ message: "ToDos found", success: true, toDos });
            next();
        }
    }
    catch (error) {
        console.log(error);
    }
}

module.exports.deleteToDo = async (req, res, next) => {
    try {
        const { toDoId } = req.body;
        const existingToDo = await ToDo.findById(toDoId);
        if (!existingToDo) {
            return res.json({ message: "ToDo does not exist" });
        }
        else {
            const toDo = await ToDo.findByIdAndDelete(toDoId);
            res
                .status(201)
                .json({ message: "ToDo deleted", success: true, toDo });
            next();
        }
    }
    catch (error) {
        console.log(error);
    }
}
