const express = require("express");

const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  getEachTask,
} = require("../controllers/taskController");

const router = express.Router();

// GET Get Information from the data
// POST To send something to the server to keep in a post request
// DELETE  Take out information from the database
// PUT/PATCH   Edit information on the database

router.get("/", getAllTask);

router.post("/create", createTask);

router.patch("/:id", editTask);

router.delete("/:id", deleteTask);

router.get("/:id", getEachTask);



module.exports = router;


