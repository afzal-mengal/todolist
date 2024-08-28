const { addToDo, getToDos, deleteToDo } = require("../Controllers/DoneController");


const router = require("express").Router();

router.post("/add", addToDo);
router.get("/get", getToDos);
router.post("/delete", deleteToDo);

module.exports = router;